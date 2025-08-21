/**
 * @file ProjectStory.ts
 * @module ProjectStory
 * @description Defines the Mongoose schema and model for a Project Story.
 */
import mongoose, { Schema, Document, models, Model } from "mongoose";

// --- TypeScript Interface ---
export interface IProjectStory extends Document {
  authorId: mongoose.Schema.Types.ObjectId;
  slug: string;
  title?: string;
  problem?: string;
  contribution?: string;
  techStack?: string[];
  challengesAndSolutions?: string; // Rich text field
  outcomesAndLearnings?: string;
  media?: string[]; // Array of image/GIF URLs
  links?: {
    liveDemo?: string;
    repository?: string;
  };
  createdAt: Date;
  updatedAt: Date;
}

// --- Mongoose Schema ---
const projectStorySchema: Schema = new Schema(
  {
    authorId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    slug: { type: String, required: true },
    title: { type: String },
    problem: { type: String },
    contribution: { type: String },
    techStack: [{ type: String }],
    challengesAndSolutions: { type: String },
    outcomesAndLearnings: { type: String },
    media: [{ type: String }],
    links: {
      liveDemo: String,
      repository: String,
    },
  },
  { timestamps: true }
);

// Ensure a user can't have two projects with the same slug
projectStorySchema.index({ authorId: 1, slug: 1 }, { unique: true });

// --- Mongoose Model ---
const ProjectStory: Model<IProjectStory> =
  models.ProjectStory ||
  mongoose.model<IProjectStory>("ProjectStory", projectStorySchema);

export default ProjectStory;
