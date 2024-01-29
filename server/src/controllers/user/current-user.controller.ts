import {
  getAuthUserByEmail,
  getAuthUserById,
  updateVerifyEmailField,
} from "@/services/auth.service";
import { BadRequestError } from "@/shared/custom-error-handler";
import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import crypto from "crypto";
import { config } from "@/config";

export const currentUser = async (
  req: Request,
  res: Response
): Promise<void> => {
  let user = null;

  const existingUser = await getAuthUserById(req.currentUser!.userId);
  if (existingUser && Object.keys(existingUser).length) {
    user = existingUser;
  }

  res.status(StatusCodes.OK).json({ message: "현재 유저", user });
};

export const resendEmail = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { email } = req.body;

  const existingUser = await getAuthUserByEmail(email);
  if (!existingUser) {
    throw new BadRequestError(
      "인증 오류: 해당 이메일로 가입된 유저를 찾을 수 없습니다.",
      "CurrentUser resedEmail() method error"
    );
  }

  const randomBytes: Buffer = await Promise.resolve(crypto.randomBytes(20));
  const randomChar: string = randomBytes.toString("hex");
  const verifyLink = `${config.CLIENT_URL}/confirm/email?v_token=${randomChar}`;

  await updateVerifyEmailField(existingUser.id, false, verifyLink);

  const updatedUser = await getAuthUserById(existingUser.id);

  res
    .status(StatusCodes.CREATED)
    .json({ message: "이메일 인증 메일이 전송되었습니다.", user: updatedUser });
};
