/**
 * @file /api/projects/index.ts
 * @module ProjectsAPI
 * @description Handles fetching all projects for a user and creating new projects.
 * @requires @clerk/nextjs, mongoose
 */
import type { NextApiRequest, NextApiResponse } from "next";
import { getAuth } from "@clerk/nextjs/server";
import dbConnect from "../../../lib/dbConnect";
import ProjectStory from "../../../models/ProjectStory";
import User from "../../../models/User";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { userId, isAuthenticated } = getAuth(req);
  const clerkId = userId;
  if (!clerkId) {
    return res.status(401).json({ error: "Not authenticated" });
  }

  await dbConnect();
  if (isAuthenticated) {
    try {
      const user = await User.findOne({ clerkId });
      if (!user) {
        return res
          .status(404)
          .json({ error: "User not found in our database" });
      }

      switch (req.method) {
        case "GET":
          const projects = await ProjectStory.find({ authorId: user._id })
            .sort({ updatedAt: -1 })
            .select("_id title status");
          return res.status(200).json(projects);

        case "POST":
          // UPDATED: Destructure all fields from the request body
          const {
            title,
            problem,
            contribution,
            techStack,
            challengesAndSolutions,
            outcomesAndLearnings,
            links,
          } = req.body;

          if (!title) {
            return res.status(400).json({ error: "Title is required." });
          }

          const newProject = await ProjectStory.create({
            authorId: user._id,
            title: title,
            slug: title.toLowerCase().replace(/\s+/g, "-") + `-${Date.now()}`,
            status: "Draft",
            // UPDATED: Save all the new fields
            problem,
            contribution,
            techStack,
            content: challengesAndSolutions, // Save the editor JSON to the 'content' field
            outcomesAndLearnings,
            links,
          });

          return res.status(201).json(newProject);

        default:
          res.setHeader("Allow", ["GET", "POST"]);
          return res.status(405).end(`Method ${req.method} Not Allowed`);
      }
    } catch (error) {
      console.error("API Error:", error);
      return res
        .status(500)
        .json({ error: "An internal server error occurred" });
    }
  }
}
