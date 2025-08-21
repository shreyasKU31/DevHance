/**
 * @file user.ts
 * @module user
 * @description Webhook handler for Clerk user events (e.g., user creation).
 */
import type { NextApiRequest, NextApiResponse } from "next";
import { Webhook } from "svix";
import { buffer } from "micro";
import mongoose from "mongoose"; // Import mongoose to check connection state
import dbConnect from "../../../lib/dbConnect";
import User from "../../../models/User";

export const config = {
  api: {
    bodyParser: false,
  },
};

const WEBHOOK_SECRET = process.env.CLERK_WEBHOOK_SECRET;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).end("Method Not Allowed");
  }

  if (!WEBHOOK_SECRET) {
    throw new Error(
      "Please add CLERK_WEBHOOK_SECRET from Clerk Dashboard to .env.local"
    );
  }

  const svix_id = req.headers["svix-id"] as string;
  const svix_timestamp = req.headers["svix-timestamp"] as string;
  const svix_signature = req.headers["svix-signature"] as string;

  if (!svix_id || !svix_timestamp || !svix_signature) {
    return res.status(400).json({ error: "Error occurred -- no svix headers" });
  }

  const payload = (await buffer(req)).toString();
  const wh = new Webhook(WEBHOOK_SECRET);

  let evt: any;

  try {
    evt = wh.verify(payload, {
      "svix-id": svix_id,
      "svix-timestamp": svix_timestamp,
      "svix-signature": svix_signature,
    });
  } catch (err) {
    console.error("Error verifying webhook:", err);
    return res.status(400).json({ Error: err });
  }

  const { id, ...attributes } = evt.data;
  const eventType = evt.type;

  if (eventType === "user.created") {
    try {
      await dbConnect();

      // ADDED: A check to ensure the connection is truly ready before proceeding.
      if (mongoose.connection.readyState !== 1) {
        throw new Error(
          `Database not connected. State: ${mongoose.connection.readyState}`
        );
      }

      const newUser = await User.create({
        clerkId: id,
        username: attributes.username,
        name: `${attributes.first_name || ""} ${
          attributes.last_name || ""
        }`.trim(),
        photo: attributes.image_url,
      });

      console.log("New user created in database:", newUser);
      return res.status(201).json({ success: true, user: newUser });
    } catch (error) {
      console.error("Error creating user in database:", error);
      return res.status(500).json({ error: "Error creating user" });
    }
  }

  return res.status(200).json({ response: "Success" });
}
