import { customAxios } from "@/lib/custom-axios";
import { SignInType, SignUpType } from "@/types";

export const signup = async (payload: SignUpType) => {
  const { data } = await customAxios.post("/auth/signup", payload);
  return data;
};

export const signin = async (payload: SignInType) => {
  const { data } = await customAxios.post("/auth/signin", payload);
  return data;
};

export const getCurrentUser = async () => {
  const { data } = await customAxios.get("/auth/currentuser");
  return data;
};

export const getUsers = async () => {
  const { data } = await customAxios.get("/auth/get-users");
  return data;
};
