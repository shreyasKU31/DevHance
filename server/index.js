import dotenv from "dotenv";
dotenv.config();
import express from "express";
import { clerkMiddleware, getAuth } from "@clerk/express";
import connectDB from "./config/db.js";
import cors from "cors";

const app = express();
const PORT = 3000;
connectDB();

app.use(clerkMiddleware());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Backend : Hi");
});

// Any route declared after the middleware that isn't public will be protected.
app.get("/api/profile", (req, res) => {
  // The 'getAuth' helper gives you access to the session and user data.
  const { userId, sessionClaims } = getAuth(req);

  if (!userId) {
    return res.status(401).json({ error: "Unauthenticated!" });
  }

  // You can now use the userId to fetch data from your database.
  console.log(`Fetching data for user: ${userId}`);

  res.json({
    userId: userId,
    email: sessionClaims.email, // You can get claims from the session
  });
});

// Start the server and listen on the specified port
app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
