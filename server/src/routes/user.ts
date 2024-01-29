import { getUsers } from "@/controllers/user/get-users.controller";
import express, { Router } from "express";

const router: Router = express.Router();

export const userRoutes = (): Router => {
  router.get("/auth/get-users", getUsers);

  return router;
};
