import {
  currentUser,
  resendEmail,
} from "@/controllers/user/current-user.controller";
import { refreshToken } from "@/controllers/user/refresh-token.controller";
import express, { Router } from "express";

const router: Router = express.Router();

export const currentUserRoutes = (): Router => {
  router.get("/auth/currentuser", currentUser);
  router.get("/auth/refresh-token/:username", refreshToken);
  router.post("/auth/resend-email", resendEmail);

  return router;
};
