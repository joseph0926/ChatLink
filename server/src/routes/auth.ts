import express, { Router } from "express";
import {
  changePassword,
  forgotPassword,
  resetPassword,
} from "@/controllers/auth/password.controller";
import { login } from "@/controllers/auth/signin.controller";
import { createUser } from "@/controllers/auth/signup.controller";
import { verifyEmail } from "@/controllers/auth/verify-email.controller";

const router: Router = express.Router();

export const authRoutes = (): Router => {
  router.post("/auth/signup", createUser);
  router.post("/auth/signin", login);
  router.put("/auth/verify-email", verifyEmail);
  router.put("/auth/forgot-password", forgotPassword);
  router.put("/auth/reset-password/:token", resetPassword);
  router.put("/auth/change-password", changePassword);

  return router;
};
