import { Request, Response, NextFunction } from "express";
import { BadRequestError, NotAuthorizedError } from "./custom-error-handler";
import { IAuthPayload } from "./auth.interface";
import { verify } from "jsonwebtoken";
import { config } from "@/config";

export const verifyUser = (
  req: Request,
  _res: Response,
  next: NextFunction
): void => {
  if (!req.session?.jwt) {
    throw new NotAuthorizedError(
      "Token is not available. Please login again.",
      "Middleware verifyUser() method error"
    );
  }

  try {
    const payload: IAuthPayload = verify(
      req.session?.jwt,
      `${config.JWT_TOKEN}`
    ) as IAuthPayload;
    req.currentUser = payload;
  } catch (error) {
    throw new NotAuthorizedError(
      "Token is not available. Please login again.",
      "Middleware verifyUser() method invalid session error"
    );
  }
  next();
};

export const checkAuthentication = (
  req: Request,
  _res: Response,
  next: NextFunction
): void => {
  if (!req.currentUser) {
    throw new BadRequestError(
      "Authentication is required to access this route.",
      "Middleware checkAuthentication() method error"
    );
  }
  next();
};
