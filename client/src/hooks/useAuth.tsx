import { getCurrentUser, signin, signup } from "@/service/auth.service";
import {
  CurrentUserReturnType,
  SignInReturnType,
  SignInType,
  SignUpReturnType,
  SignUpType,
} from "@/types";
import { useMutation, useQuery } from "@tanstack/react-query";

export const useAuth = () => {
  const { mutateAsync: signupMutation, isPending: isSignupLoading } =
    useMutation({
      mutationFn: async (payload: SignUpType): Promise<SignUpReturnType> =>
        await signup(payload),
    });

  const { mutateAsync: signinMutation, isPending: isSigninLoading } =
    useMutation({
      mutationFn: async (payload: SignInType): Promise<SignInReturnType> =>
        await signin(payload),
    });

  const { data: currentUser, isPending: isGetCurrntUserLoading } = useQuery({
    queryKey: ["user"],
    queryFn: async (): Promise<CurrentUserReturnType> => await getCurrentUser(),
    retry: 1,
  });

  return {
    signupMutation,
    signinMutation,
    isSignupLoading,
    isSigninLoading,
    currentUser,
    isGetCurrntUserLoading,
  };
};
