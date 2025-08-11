import dotenv from "dotenv";
dotenv.config();
import express from "express";
import { clerkMiddleware } from "@clerk/express";
import connectDB from "./config/db.js";

const app = express();
const PORT = 3000;
connectDB();

app.use(clerkMiddleware());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Backend : Hi");
});

// Start the server and listen on the specified port
app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
