import { Application } from 'express';

const BASE_PATH = '/api/v1/auth';

export function appRoutes(app: Application): void {
  app.use(BASE_PATH, () => console.log('auth routes'));
}
