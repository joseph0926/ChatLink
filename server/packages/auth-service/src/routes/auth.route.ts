import express, { Router } from 'express';
import { signup } from '@auth/controllers/signup.controller';

const router: Router = express.Router();

export function authRoutes(): Router {
  router.post('/signup', signup);

  return router;
}
