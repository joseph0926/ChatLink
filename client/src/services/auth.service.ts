import { BASE_URL } from "@/lib/utils";
import { SignupType } from "@/types/auth";

export async function signup({
  email,
  nickname,
  password,
  profileImage,
}: SignupType) {
  const url = `${BASE_URL}/v1/auth/signup`;
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify({
      email,
      password,
      nickname,
      profileImage,
    }),
  });
  if (!response.ok) {
    throw new Error(`AuthService returned ${response.status} for ${url}`);
  }

  return await response.json();
}
