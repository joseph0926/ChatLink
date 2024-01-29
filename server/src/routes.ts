import { Application } from "express";
import { authRoutes } from "@/routes/auth";
import { verifyGatewayRequest } from "@/shared/middleware";
import { currentUserRoutes } from "@/routes/current-user";
import { healthRoutes } from "@/routes/health";

const BASE_PATH = "/api/v1/auth";

export const appRoutes = (app: Application): void => {
  app.use("", healthRoutes());
  app.use(BASE_PATH, verifyGatewayRequest, authRoutes());
  app.use(BASE_PATH, verifyGatewayRequest, currentUserRoutes());
};
