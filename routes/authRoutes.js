import express from "express";
const router = express.Router();

import {
  register,
  login,
  getCurrentUser,
  logout,
  verifyEmail,
  forgotPassword,
  resetPassword,
  updateUser
} from "../controllers/authControllers.js";
import authMiddleware from "../middleware/auth.js";
import rateLimiter from "express-rate-limit"
import { uploadUserImageCloud } from "../controllers/uploadController.js";

const apiLimiter = rateLimiter({
windowMs: 15 * 60 * 1000,
max: 10,
message: "Too many requests. Please try again after 15 minutes"
})


router.route("/register").post(apiLimiter,register);
router.route("/login").post( apiLimiter,login);
router.route("/logout").get(logout);
router.route("/verify-email").post(verifyEmail);
router.route("/forgot-password").post(forgotPassword);
router.route("/reset-password").post(resetPassword);

router.route("/uploadPhoto").post(authMiddleware, uploadUserImageCloud);
router.route("/updateUser").patch(authMiddleware, updateUser)
router.route("/getCurrentUser").get(authMiddleware, getCurrentUser);

export default router;
