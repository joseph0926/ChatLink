import { Application } from "express";
import { authRoutes } from "@/routes/auth";
import { currentUserRoutes } from "@/routes/current-user";
import { verifyUser } from "./shared/middleware";
import { userRoutes } from "./routes/user";
import { postRoutes } from "./routes/post";

const BASE_PATH = "/api/v1";

export const appRoutes = (app: Application): void => {
  app.use(BASE_PATH, authRoutes());
  app.use(BASE_PATH, userRoutes());
  app.use(BASE_PATH, verifyUser, currentUserRoutes());
  app.use(BASE_PATH, verifyUser, postRoutes());
};
