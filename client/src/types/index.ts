export type User = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  username: string;
  email: string;
  profilePublicId: string;
  profileImage: string;
  emailVerificationToken: string | null;
  emailVerified: boolean;
  passwordResetToken: string | null;
  passwordResetExpires: Date;
};

export type INavLink = {
  imgURL: string;
  route: string;
  label: string;
};

export type SignUpType = {
  username: string;
  email: string;
  password: string;
  profileImage: string;
};

export type SignUpReturnType = {
  message: string;
  user: User;
  token: string;
};

export type SignInType = {
  username: string;
  password: string;
};

export type SignInReturnType = {
  message: string;
  user: User;
  token: string;
};

export type CurrentUserReturnType = {
  message: string;
  user: User;
};
