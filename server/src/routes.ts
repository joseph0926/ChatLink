import { Application } from "express";
import { authRoutes } from "@/routes/auth";
import { currentUserRoutes } from "@/routes/current-user";
import { healthRoutes } from "@/routes/health";
import { verifyUser } from "./shared/middleware";
import { userRoutes } from "./routes/user";

const BASE_PATH = "/api/v1/auth";

export const appRoutes = (app: Application): void => {
  app.use("", healthRoutes());
  app.use(BASE_PATH, authRoutes());
  app.use(BASE_PATH, userRoutes());
  app.use(BASE_PATH, verifyUser, currentUserRoutes());
};
