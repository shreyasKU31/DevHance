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
  // Get the authenticated user's ID from Clerk
  const { userId: clerkId } = getAuth(req);

  if (!clerkId) {
    return res.status(401).json({ error: "Not authenticated" });
  }

  await dbConnect();

  try {
    // Find our internal user document based on the Clerk ID
    const user = await User.findOne({ clerkId });
    if (!user) {
      return res.status(404).json({ error: "User not found in our database" });
    }

    switch (req.method) {
      // --- FETCH ALL PROJECTS FOR THE USER ---
      case "GET":
        const projects = await ProjectStory.find({ authorId: user._id })
          .sort({ updatedAt: -1 }) // Show the most recently updated first
          .select("_id title status"); // Only select the fields needed for the list view

        return res.status(200).json(projects);

      // --- CREATE A NEW, EMPTY PROJECT ---
      case "POST":
        const newProject = await ProjectStory.create({
          authorId: user._id,
          title: "Untitled Project", // Default title
          slug: `untitled-${Date.now()}`, // Simple unique slug
          status: "Draft",
        });

        return res.status(201).json(newProject);

      default:
        res.setHeader("Allow", ["GET", "POST"]);
        return res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  } catch (error) {
    console.error("API Error:", error);
    return res.status(500).json({ error: "An internal server error occurred" });
  }
}
