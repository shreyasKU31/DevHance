import express from "express";
import wrapAsync from "../utils/wrapAsync";
import Project from "../models/project.js";
const router = express.Router();

// get all projects to discover page
router.get(
  "/",
  wrapAsync(async (req, res) => {
    const newProject = await Project.find({});
  })
);

// All routes should be protected by sign in as well as owner
// get single project by id
router.get("/:projectId");

// add a project
router.post("/");

// update a project
router.put("/:projectId");

// delete a project
router.delete("/:projectId");

export default router;
