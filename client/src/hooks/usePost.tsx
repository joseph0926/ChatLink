import { createPost } from "@/service/post.service";
import { PostType } from "@/types";
import { useMutation } from "@tanstack/react-query";

export const usePost = () => {
  const { mutateAsync: createPostMutation, isPending: isCreatePostLoading } =
    useMutation({
      mutationFn: async (payload: PostType) => createPost(payload),
    });

  return {
    createPostMutation,
    isCreatePostLoading,
  };
};
