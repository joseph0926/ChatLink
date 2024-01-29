import { customAxios } from "@/lib/custom-axios";
import { PostType } from "@/types";

export const createPost = async (payload: PostType) => {
  const { data } = await customAxios.post("/post/create-post", payload);
  return data;
};
