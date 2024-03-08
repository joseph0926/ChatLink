import { config } from '@auth/config';
import * as jwt from 'jsonwebtoken';

export const signToken = (id: string, email: string, nickname: string) => {
  return jwt.sign(
    {
      id,
      email,
      nickname
    },
    config.JWT_TOKEN!,
    {
      expiresIn: '1d'
    }
  );
};
