import { db } from "@/db";
import { NotFoundError } from "@/shared/custom-error-handler";
import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

export const getUsers = async (_req: Request, res: Response): Promise<void> => {
  const users = await db.user.findMany({
    where: {},
    orderBy: {
      createdAt: "desc",
    },
    take: 5,
  });

  if (!users || users.length === 0) {
    throw new NotFoundError(
      "유저를 찾을 수 없습니다.",
      "getUsers() method errors,,,"
    );
  }

  res
    .status(StatusCodes.OK)
    .json({ message: "5명의 유저를 불러왔습니다.", users });
};
