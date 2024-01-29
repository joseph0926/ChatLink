import JWT from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import { NotAuthorizedError } from "./custom-error-handler";

const tokens: string[] = [
  "auth",
  "seller",
  "gig",
  "search",
  "buyer",
  "message",
  "order",
  "review",
];

export function verifyGatewayRequest(
  req: Request,
  _res: Response,
  next: NextFunction
): void {
  if (!req.headers?.gatewaytoken) {
    throw new NotAuthorizedError(
      "인증 오류",
      "verifyGatewayRequest(): Request not coming from api gateway"
    );
  }

  const token: string = req.headers?.gatewaytoken as string;
  if (!token) {
    console.log("22222222222");
    throw new NotAuthorizedError(
      "인증 오류",
      "verifyGatewayRequest(): Request not coming from api gateway"
    );
  }

  try {
    const payload: { id: string; iat: number } = JWT.verify(
      token,
      "4a0ea5289e11618219f1488e25b2"
    ) as {
      id: string;
      iat: number;
    };
    if (!tokens.includes(payload.id)) {
      console.log("3333333333");
      throw new NotAuthorizedError(
        "인증 오류",
        "verifyGatewayRequest(): Request payload is invalid"
      );
    }
  } catch (error) {
    console.log("444444444");
    throw new NotAuthorizedError(
      "인증 오류",
      "verifyGatewayRequest(): Request not coming from api gateway"
    );
  }

  next();
}
