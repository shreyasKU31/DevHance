import express from "express";
import wrapAsync from "../utils/wrapAsync";
import { useAuth } from "@clerk/express";
import User from "../models/user.js";
const router = express.Router();

router.get(
  "/sync",
  wrapAsync(async (req, res) => {
    const { userID, sessionData } = useAuth(req);

    if (!userID) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const updateUser = await User.findByIdAndUpdate(
      { clerkID: userID },
      {
        clerkId: userId,
        email: sessionClaims.email, // Or however you get email from Clerk
        fullName: sessionClaims.fullName,
        imageUrl: sessionClaims.imageUrl,
      },
      {
        new: true, // Return the updated document
        upsert: true, // Create the document if it doesn't exist
      }
    );
  })
);

export default router;
