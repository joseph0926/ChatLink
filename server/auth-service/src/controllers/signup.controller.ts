import crypto from 'crypto';

import { Request, Response } from 'express';
import { db } from '@/db';
import { BadRequestError, winstonLogger } from '@joseph0926-chatlink/share';
import { signupSchema } from '@/schemas/signup.schema';
import { hashPassword } from '@/lib/utils';
import { config } from '@/config';
import { StatusCodes } from 'http-status-codes';
import { signToken } from '@/lib/token';
import { Logger } from 'winston';

const log: Logger = winstonLogger(`${config.ELASTIC_SEARCH_URL}`, 'authService', 'debug');

export const signup = async (req: Request, res: Response) => {
  try {
    const { error } = await Promise.resolve(signupSchema.validate(req.body));
    if (error?.details) {
      throw new BadRequestError(error.details[0].message, 'Auth Service Controller signup() method error');
    }

    const { email, password, nickname, profileImage } = req.body;

    const existingUser = await db.user.findUnique({
      where: {
        email
      }
    });
    if (existingUser) {
      throw new BadRequestError('This email is already signed up', 'Auth Service Controller signup() method error');
    }

    const randomBytes = await Promise.resolve(crypto.randomBytes(20));
    const code = randomBytes.toString('hex');

    const hashedPassword = await hashPassword(password);

    const user = await db.user.create({
      data: {
        email,
        nickname,
        password: hashedPassword,
        profileImage,
        code
      }
    });
    // const verificationLink = `${config.CLIENT_URL}/confirm_email?v_token=${user.code}`;
    const userJWT = signToken(user.id, user.email, user.nickname);

    res.status(StatusCodes.CREATED).json({ message: 'User created successfully', user, token: userJWT });
  } catch (error) {
    log.error(error);
    console.log(error);
  }
};
