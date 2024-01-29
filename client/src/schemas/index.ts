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
