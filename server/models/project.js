import { Schema, model } from "mongoose";

const projectSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
    },
    creator: {
      type: Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
    technologies: [
      {
        type: String,
        required: true,
      },
    ],
    links: {
      github: {
        type: String,
        required: true,
      },
      live: String,
    },
    image: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Project = model("project", projectSchema);
export default Project;
