import { changePasswordSchema, passwordSchema } from "@/schemas/password";
import {
  getAuthUserByEmail,
  getAuthUserByPasswordToken,
  getAuthUserByUsername,
  updatePassword,
  updatePasswordToken,
} from "@/services/auth.service";
import { BadRequestError } from "@/shared/custom-error-handler";
import { Request, Response } from "express";
import crypto from "crypto";
import { StatusCodes } from "http-status-codes";
import { hashPassword } from "@/db/auth";

export const forgotPassword = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { error } = await Promise.resolve(passwordSchema.validate(req.body));
  if (error?.details) {
    throw new BadRequestError(
      error.details[0].message,
      "Password createPassword() method error"
    );
  }

  const { email } = req.body;

  const existingUser = await getAuthUserByEmail(email);
  if (!existingUser) {
    throw new BadRequestError(
      "인증 오류: 해당 이메일로 가입된 정보를 찾을 수 없습니다.",
      "Password createPassword() method error"
    );
  }

  const randomBytes: Buffer = await Promise.resolve(crypto.randomBytes(20));
  const randomChar: string = randomBytes.toString("hex");
  const date: Date = new Date();
  date.setHours(date.getHours() + 1);

  await updatePasswordToken(existingUser.id, randomChar, date);

  res
    .status(StatusCodes.OK)
    .json({ message: "비밀번호 재설정 링크가 정상적으로 발송되었습니다." });
};

export const resetPassword = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { error } = await Promise.resolve(passwordSchema.validate(req.body));
  if (error?.details) {
    throw new BadRequestError(
      error.details[0].message,
      "Password resetPassword() method error"
    );
  }

  const { password, confirmPassword } = req.body;
  const { token } = req.params;
  if (password !== confirmPassword) {
    throw new BadRequestError(
      "인증 오류: 비밀번호가 일치하지 않습니다.",
      "Password resetPassword() method error"
    );
  }

  const existingUser = await getAuthUserByPasswordToken(token);
  if (!existingUser) {
    throw new BadRequestError(
      "인증 오류: 비밀번호가 토큰이 유효하지 않습니다.",
      "Password resetPassword() method error"
    );
  }

  const hashedPassword: string = await hashPassword(password);

  await updatePassword(existingUser.id, hashedPassword);

  res.status(StatusCodes.OK).json({ message: "비밀번호 재설정 성공" });
};

export const changePassword = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { error } = await Promise.resolve(
    changePasswordSchema.validate(req.body)
  );
  if (error?.details) {
    throw new BadRequestError(
      error.details[0].message,
      "Password changePassword() method error"
    );
  }

  const { currentPassword, newPassword } = req.body;
  if (currentPassword === newPassword) {
    throw new BadRequestError(
      "인증 오류: 동일한 비밀번호로 재설정할 수 없습니다.",
      "Password changePassword() method error"
    );
  }

  const existingUser = await getAuthUserByUsername(
    `${req.currentUser?.username}`
  );
  if (!existingUser) {
    throw new BadRequestError(
      "인증 오류: 해당 아이디로 가입된 정보를 찾을 수 없습니다.",
      "Password changePassword() method error"
    );
  }

  const hashedPassword: string = await hashPassword(newPassword);

  await updatePassword(existingUser.id, hashedPassword);

  res.status(StatusCodes.OK).json({ message: "비밀번호 변경 성공" });
};
