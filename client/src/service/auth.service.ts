import { customAxios } from "@/lib/custom-axios";
import { SignUpType } from "@/types";

export const signup = async (payload: SignUpType) => {
  const { data } = await customAxios.post("/auth/signup", payload);
  return data;
};
