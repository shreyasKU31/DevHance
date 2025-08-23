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
  content?: object; // This will store the JSON from Tiptap
  outcomesAndLearnings?: string;
  media?: string[];
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
    content: { type: Object }, // Changed from String to Object
    outcomesAndLearnings: { type: String },
    media: [{ type: String }],
    links: {
      liveDemo: String,
      repository: String,
    },
  },
  { timestamps: true }
);

projectStorySchema.index({ authorId: 1, slug: 1 }, { unique: true });

const ProjectStory: Model<IProjectStory> =
  models.ProjectStory ||
  mongoose.model<IProjectStory>("ProjectStory", projectStorySchema);

export default ProjectStory;
