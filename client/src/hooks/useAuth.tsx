import { signup } from "@/service/auth.service";
import { SignUpReturnType, SignUpType } from "@/types";
import { useMutation } from "@tanstack/react-query";

export const useAuth = () => {
  const { mutateAsync: signupMutation, isPending: isSignupLoading } =
    useMutation({
      mutationFn: async (payload: SignUpType): Promise<SignUpReturnType> =>
        await signup(payload),
    });

  return {
    signupMutation,
    isSignupLoading,
  };
};
