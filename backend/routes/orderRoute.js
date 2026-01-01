import express from "express";

import {
  placeOrder,
  placeOrderStrip,
  placeOrderRazorpay,
  allOrders,
  userOrders,
  updateStatus,
  verifyStripe,
} from "../controllers/orderController.js";

import adminAuth from "../middlware/adminAuth.js";
import authUser from "../middlware/auth.js";

const orderRouter = express.Router();

// Admin Features
orderRouter.post("/list", adminAuth, allOrders);
orderRouter.post("/status", adminAuth, updateStatus);

//Payment Features
orderRouter.post("/place", authUser, placeOrder);
orderRouter.post("/stripe", authUser, placeOrderStrip);
orderRouter.post("/razorpay", authUser, placeOrderRazorpay);

//User Feature

orderRouter.post("/userorders", authUser, userOrders);

//verify Payment
orderRouter.post("/verifyStripe", authUser, verifyStripe);

export default orderRouter;
