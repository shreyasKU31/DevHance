/**
 * @file User.ts
 * @module User
 * @description Defines the Mongoose schema and model for a User.
 */
import mongoose, { Schema, Document, models, Model } from "mongoose";

// --- TypeScript Interface ---
// This defines the shape of a user document.
export interface IUser extends Document {
  clerkId: string;
  username?: string;
  name?: string;
  photo?: string;
  headline?: string;
  links?: {
    github?: string;
    linkedin?: string;
    personal?: string;
  };
}

// --- Mongoose Schema ---
const userSchema: Schema = new Schema({
  clerkId: { type: String, required: true, unique: true },
  username: { type: String, unique: true, sparse: true },
  name: { type: String },
  photo: { type: String },
  headline: { type: String },
  links: {
    github: String,
    linkedin: String,
    personal: String,
  },
});

// --- Mongoose Model ---
// This prevents Mongoose from redefining the model every time in development.
const User: Model<IUser> =
  models.User || mongoose.model<IUser>("User", userSchema);

export default User;
