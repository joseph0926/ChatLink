import * as z from 'zod';

export const SigninSchema = z.object({
  username: z.string(),
  email: z.string().email({ message: '유효하지 않은 이메일입니다.' }),
  password: z.string().min(4, { message: '비밀번호는 최소 4자리여야합니다.' }).max(12, { message: '비밀번호는 최대 12자리입니다.' })
});

export const SignupSchema = z.object({
  username: z.string().min(1, { message: '이름은 필수로 입력해야합니다.' }),
  email: z.string().email({ message: '유효하지 않은 이메일입니다.' }),
  password: z.string().min(4, { message: '비밀번호는 최소 4자리여야합니다.' }).max(12, { message: '비밀번호는 최대 12자리입니다.' })
});
