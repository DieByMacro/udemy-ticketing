import mongoose from "mongoose";
import express, { Request, Response } from "express";
import { body } from "express-validator";
import { requireAuth, validateRequest } from "@duc.q/common";
import { Ticket } from "../models/ticket";

const router = express.Router();

router.post(
  "/api/orders",
  requireAuth,
  [
    body("ticketId")
      .not()
      .isEmpty()
      .custom((input: string) => mongoose.Types.ObjectId.isValid(input)) // Make sure input id is MongoDB ID format
      .withMessage("TicketId must be provided"),
  ],
  validateRequest,
  async (req: Request, res: Response) => {
    // const tickets = await Ticket.find({});

    res.send({});
  }
);

export { router as newOrderRouter };
