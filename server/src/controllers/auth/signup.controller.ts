import { signupSchema } from "@/schemas/signup";
import {
  createAuthUser,
  getAuthUserByUsernameOREmail,
  signToken,
} from "@/services/auth.service";
import { BadRequestError } from "@/shared/custom-error-handler";
import { Request, Response } from "express";
import { v4 as uuidV4 } from "uuid";
import { UploadApiResponse } from "cloudinary";
import { uploads } from "@/shared/cloudinary-upload";
import crypto from "crypto";
import { User } from "@prisma/client";
import { StatusCodes } from "http-status-codes";
import { hashPassword } from "@/db/auth";

export const createUser = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { error } = await Promise.resolve(signupSchema.validate(req.body));
  if (error?.details) {
    throw new BadRequestError(
      error.details[0].message,
      "Signup createUser() method error"
    );
  }

  const { username, email, password, profileImage } = req.body;
  const existingUser = await getAuthUserByUsernameOREmail(username, email);
  if (existingUser) {
    throw new BadRequestError(
      "인증 오류: 해당 Email 또는 Username으로 가입된 정보가 존재합니다.",
      "Signup createUser() method error"
    );
  }

  const profilePublicId = uuidV4();
  const uploadResult: UploadApiResponse = (await uploads(
    profileImage,
    `${profilePublicId}`,
    true,
    true
  )) as UploadApiResponse;
  if (!uploadResult.public_id) {
    throw new BadRequestError(
      "File upload 오류",
      "Signup createUser() method error"
    );
  }

  const randomBytes: Buffer = await Promise.resolve(crypto.randomBytes(20));
  const randomChar: string = randomBytes.toString("hex");

  const hashedPassword = await hashPassword(password);

  const authData: User = {
    username,
    email,
    password: hashedPassword,
    profilePublicId,
    profileImage: uploadResult?.secure_url,
    emailVerificationToken: randomChar,
  } as User;

  const user = await createAuthUser(authData);

  const userJWT: string = signToken(user.id, user.email, user.username);

  req.session!.jwt = userJWT;

  res
    .status(StatusCodes.CREATED)
    .json({ message: "회원가입 성공", user, token: userJWT });
};
