import {
  currentUser,
  resendEmail,
} from "@/controllers/current-user.controller";
import { refreshToken } from "@/controllers/refresh-token.controller";
import express, { Router } from "express";

const router: Router = express.Router();

export const currentUserRoutes = (): Router => {
  router.get("/currentuser", currentUser);
  router.get("/refresh-token/:username", refreshToken);
  router.post("/resend-email", resendEmail);

  return router;
};
