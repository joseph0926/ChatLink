import { config } from "@/config";
import { db, exclude } from "@/db";
import { User } from "@prisma/client";
import { sign } from "jsonwebtoken";

export const createAuthUser = async (
  data: User
): Promise<Omit<User, "password">> => {
  const result = await db.user.create({
    data,
  });

  const { password, ...userData } = result;

  return userData;
};

export const getAuthUserById = async (
  userId: string
): Promise<Omit<User, "password"> | null> => {
  const user = await db.user.findUnique({
    where: {
      id: userId,
    },
  });

  if (user) {
    const userWithoutPassword = exclude(user, ["password"]);
    return userWithoutPassword;
  }

  return null;
};

export const getAuthUserByUsernameOREmail = async (
  username: string,
  email: string
): Promise<Omit<User, "password"> | null> => {
  const user = await db.user.findFirst({
    where: {
      OR: [{ email }, { username }],
    },
  });

  if (user) {
    const userWithoutPassword = exclude(user, ["password"]);
    return userWithoutPassword;
  }

  return null;
};

export const getAuthUserByUsername = async (
  username: string
): Promise<User | null> => {
  const user = await db.user.findUnique({
    where: {
      username,
    },
  });

  return user;
};

export const getAuthUserByEmail = async (
  email: string
): Promise<User | null> => {
  const user = await db.user.findUnique({
    where: {
      email,
    },
  });

  return user;
};

export const getAuthUserByVerificationToken = async (
  token: string
): Promise<Omit<User, "password"> | null> => {
  const user = await db.user.findUnique({
    where: {
      emailVerificationToken: token,
    },
  });

  if (user) {
    const userWithoutPassword = exclude(user, ["password"]);
    return userWithoutPassword;
  }

  return null;
};

export const getAuthUserByPasswordToken = async (
  token: string
): Promise<Omit<User, "password"> | null> => {
  const user = await db.user.update({
    where: { passwordResetToken: token },
    data: {
      passwordResetExpires: new Date(),
    },
  });

  if (user) {
    const userWithoutPassword = exclude(user, ["password"]);
    return userWithoutPassword;
  }

  return null;
};

export const updateVerifyEmailField = async (
  userId: string,
  emailVerified: boolean,
  emailVerificationToken?: string
): Promise<Omit<User, "password"> | null> => {
  const user = await db.user.update({
    where: {
      id: userId,
    },
    data: {
      emailVerified,
      emailVerificationToken,
    },
  });

  if (user) {
    const userWithoutPassword = exclude(user, ["password"]);
    return userWithoutPassword;
  }

  return null;
};

export const updatePasswordToken = async (
  userId: string,
  token: string,
  tokenExpiration: Date
): Promise<Omit<User, "password"> | null> => {
  const user = await db.user.update({
    where: {
      id: userId,
    },
    data: {
      passwordResetToken: token,
      passwordResetExpires: tokenExpiration,
    },
  });

  if (user) {
    const userWithoutPassword = exclude(user, ["password"]);
    return userWithoutPassword;
  }

  return null;
};

export const updatePassword = async (
  userId: string,
  password: string
): Promise<Omit<User, "password"> | null> => {
  const user = await db.user.update({
    where: {
      id: userId,
    },
    data: {
      password,
      passwordResetToken: "",
      passwordResetExpires: new Date(),
    },
  });

  if (user) {
    const userWithoutPassword = exclude(user, ["password"]);
    return userWithoutPassword;
  }

  return null;
};

export const signToken = (userId: string, email: string, username: string) => {
  return sign(
    {
      userId,
      email,
      username,
    },
    config.JWT_TOKEN!
  );
};
