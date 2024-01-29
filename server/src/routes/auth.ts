import express, { Router } from "express";
import {
  changePassword,
  forgotPassword,
  resetPassword,
} from "@/controllers/password.controller";
import { login } from "@/controllers/signin.controller";
import { createUser } from "@/controllers/signup.controller";
import { verifyEmail } from "@/controllers/verify-email.controller";

const router: Router = express.Router();

export const authRoutes = (): Router => {
  router.post("/signup", createUser);
  router.post("/signin", login);
  router.put("/verify-email", verifyEmail);
  router.put("/forgot-password", forgotPassword);
  router.put("/reset-password/:token", resetPassword);
  router.put("/change-password", changePassword);

  return router;
};
