const { instance } = require("../config/razorpay");
const Property = require("../models/Property");
const crypto = require("crypto");
const User = require("../models/User");
const mailSender = require("../utils/mailSender");
const mongoose = require("mongoose");
const {
  courseEnrollmentEmail,
} = require("../mail/templates/courseEnrollmentEmail");
const {
  paymentSuccessEmail,
} = require("../mail/templates/paymentSuccessEmail");

// Capture the payment and initiate the Razorpay order
exports.capturePayment = async (req, res) => {
  const userId = req.user.id;
  if (!userId) {
    return res.json({ success: false, message: "Please Provide User ID" });
  }

  let total_amount = 499;

  try {
    const user = await User.findOne(userId);
    if (user.subscriptionExpires > Date.now()) {
      return res
        .status(200)
        .json({ success: false, message: "You are already subscribed!!" });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ success: false, message: error.message });
  }

  const options = {
    amount: total_amount * 100,
    currency: "INR",
    receipt: Math.random(Date.now()).toString(),
  };

  try {
    // Initiate the payment using Razorpay
    const paymentResponse = await instance.orders.create(options);
    // console.log(paymentResponse)
    res.json({
      success: true,
      data: paymentResponse,
    });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ success: false, message: "Could not initiate order." });
  }
};

// verify the payment
exports.verifyPayment = async (req, res) => {
  const razorpay_order_id = req.body?.razorpay_order_id;
  const razorpay_payment_id = req.body?.razorpay_payment_id;
  const razorpay_signature = req.body?.razorpay_signature;
  const courses = req.body?.courses;

  const userId = req.user.id;

  if (
    !razorpay_order_id ||
    !razorpay_payment_id ||
    !razorpay_signature ||
    !courses ||
    !userId
  ) {
    return res.status(200).json({ success: false, message: "Payment Failed" });
  }

  let body = razorpay_order_id + "|" + razorpay_payment_id;

  const expectedSignature = crypto
    .createHmac("sha256", process.env.RAZORPAY_SECRET)
    .update(body.toString())
    .digest("hex");

  if (expectedSignature === razorpay_signature) {
    try {
      const user = await User.findOneAndUpdate(
        { _id: userId },
        { subscriptionExpires: Date.now() + 2592000000 },
        { new: true }
      );

      const emailResponse = await mailSender(
        user.email,
        `Successfully Subscribed into Rentez`,
        courseEnrollmentEmail(
          "Rentez plan",
          `${user.firstName} ${user.lastName}`
        )
      );

      // console.log("Email sent successfully: ", emailResponse.response)/
    } catch (error) {
      console.log(error);
      return res.status(400).json({ success: false, error: error.message });
    }
    return res.status(200).json({ success: true, message: "Payment Verified" });
  }

  return res.status(200).json({ success: false, message: "Payment Failed" });
};

// Send Payment Success Email
exports.sendPaymentSuccessEmail = async (req, res) => {
  const { orderId, paymentId, amount } = req.body;

  const userId = req.user.id;

  if (!orderId || !paymentId || !amount || !userId) {
    return res
      .status(400)
      .json({ success: false, message: "Please provide all the details" });
  }

  try {
    const user = await User.findById(userId);

    await mailSender(
      user.email,
      `Payment Received`,
      paymentSuccessEmail(
        `${user.firstName} ${user.lastName}`,
        amount / 100,
        orderId,
        paymentId
      )
    );
  } catch (error) {
    console.log("error in sending mail", error);
    return res
      .status(400)
      .json({
        success: false,
        message: "Could not send payment receiving email",
      });
  }
};
