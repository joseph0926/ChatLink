import express, { Express } from "express";
import { start } from "@/server";
import { config } from "@/config";

const initialize = (): void => {
  config.cloudinaryConfig();

  const app: Express = express();
  start(app);
};

initialize();
