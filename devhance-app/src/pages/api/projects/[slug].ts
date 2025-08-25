import type { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "../../../lib/dbConnect";
import ProjectStory from "../../../models/ProjectStory";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await dbConnect();
  const { slug } = req.query;

  if (req.method === "GET") {
    try {
      const project = await ProjectStory.findOne({ slug });
      if (!project) {
        return res.status(404).json({ error: "Project not found" });
      }
      return res.status(200).json(project);
    } catch (error) {
      return res.status(500).json({ error: "Internal server error" });
    }
  } else {
    res.setHeader("Allow", ["GET"]);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
