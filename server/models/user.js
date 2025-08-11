import { Schema, model } from "mongoose";

const userSchema = new Schema(
  {
    clerkId: {
      type: String,
      required: true,
      unique: true, // Ensures no two users have the same Clerk ID
    },
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    fullName: {
      type: String,
      required: true,
    },
    headline: {
      type: String,
      default: "Aspiring Developer", // A default value for new users
    },
    bio: String, // A simple string field
    imageUrl: String,
    // projects: [
    //   {
    //     type: Schema.Types.ObjectId,
    //     ref: "Project", // Creates a relationship to a 'Project' model
    //   },
    // ],
  },
  {
    // This option automatically adds `createdAt` and `updatedAt` fields
    timestamps: true,
  }
);

const User = model("user", userSchema);
export default User;
