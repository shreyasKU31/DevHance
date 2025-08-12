import dotenv from "dotenv";
dotenv.config();
import express from "express";
import mongoose from "mongoose";
import { clerkMiddleware, getAuth } from "@clerk/express";
import connectDB from "./config/db.js";
import cors from "cors";
// import Project from "./models/project.js";
// import wrapAsync from "./utils/wrapAsync.js";
import authRoutes from "./routes/auth.routes.js";
// import projectRoutes from "./routes/projects.routes.js";

const app = express();
const PORT = 3000;
connectDB();

app.use(cors());
app.use(express.json());
app.use(clerkMiddleware());

// app.use("/api/projects", projectRoutes);

app.get("/", (req, res) => {
  res.send("Backend : Hi");
});

// app.post(
//   "/api/projects/add-project",
//   wrapAsync(async (req, res) => {
//     const newProject = await Project.insertOne({
//       title: "Data Visualization Dashboard",
//       description:
//         "An interactive dashboard that visualizes global climate data using D3.js. Features maps, dynamic charts, and time-series analysis to track environmental changes.",
//       creator: new mongoose.Types.ObjectId(placeholderCreatorId),
//       technologies: ["SvelteKit", "D3.js", "Tailwind CSS", "Python", "Flask"],
//       links: {
//         github: "https://github.com/example/data-dashboard",
//         live: "https://dashboard.example.com",
//       },
//       image: "https://picsum.photos/seed/project2/800/600",
//     });

//     res.status(200).json({ success: true, data: newProject });
//   })
// );

app.use("/api/auth", authRoutes);

// Start the server and listen on the specified port
app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
