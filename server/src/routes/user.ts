import { getUsers } from "@/controllers/get-users.controller";
import express, { Router } from "express";

const router: Router = express.Router();

export const userRoutes = (): Router => {
  router.get("/get-users", getUsers);

  return router;
};
