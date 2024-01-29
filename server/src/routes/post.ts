import { createPost } from "@/controllers/post/create-post.controller";
import express, { Router } from "express";

const router: Router = express.Router();

export const postRoutes = (): Router => {
  router.post("/post/create-post", createPost);

  return router;
};
