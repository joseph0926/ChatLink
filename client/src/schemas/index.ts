import * as z from "zod";

export const SignupValidation = z.object({
  username: z
    .string()
    .min(4, { message: "Username은 최소 4글자입니다." })
    .max(12, { message: "Username은 최대 12글자입니다." }),
  email: z.string().email(),
  password: z
    .string()
    .min(4, { message: "Password은 최소 4글자입니다." })
    .max(12, { message: "Password은 최대 12글자입니다." }),
  profileImage: z.string().min(1, {
    message: "ProfileImage은 필수 입력 필드입니다.",
  }),
});

export const SigninValidation = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(4, { message: "Password은 최소 4글자입니다." })
    .max(12, { message: "Password은 최대 12글자입니다." }),
});

export const PostValidation = z.object({
  caption: z
    .string()
    .min(5, { message: "Minimum 5 characters." })
    .max(2200, { message: "Maximum 2,200 caracters" }),
  imageUrl: z.string(),
  location: z
    .string()
    .min(1, { message: "This field is required" })
    .max(1000, { message: "Maximum 1000 characters." }),
  tags: z.string(),
});
