import * as z from "zod";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { PostValidation } from "@/schemas";
import Loader from "@/components/ui/loader";
import { Post } from "@/types";
import { usePost } from "@/hooks/usePost";
import { useAuth } from "@/hooks/useAuth";
import { Textarea } from "../ui/textarea";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import FileUploader from "../ui/file-uploader";

type PostFormProps = {
  post?: Post;
  action: "Create" | "Update";
};

const PostForm = ({ post, action }: PostFormProps) => {
  const navigate = useNavigate();
  const form = useForm<z.infer<typeof PostValidation>>({
    resolver: zodResolver(PostValidation),
    defaultValues: {
      caption: post ? post?.caption : "",
      imageUrl: "",
      location: post ? post.location : "",
      tags: post ? post.tags.join(",") : "",
    },
  });

  const { currentUser } = useAuth();
  const { createPostMutation, isCreatePostLoading } = usePost();

  // Handler
  const handleSubmit = async (value: z.infer<typeof PostValidation>) => {
    if (!currentUser || !currentUser.user.id) {
      navigate("/auth/sign-in");
      return;
    }

    // ACTION = UPDATE
    // if (post && action === "Update") {
    //   const updatedPost = await updatePost({
    //     ...value,
    //     postId: post.$id,
    //     imageId: post.imageId,
    //     imageUrl: post.imageUrl,
    //   });

    //   if (!updatedPost) {
    //     toast({
    //       title: `${action} post failed. Please try again.`,
    //     });
    //   }
    //   return navigate(`/posts/${post.$id}`);
    // }

    // ACTION = CREATE
    const newPost = await createPostMutation({
      ...value,
      userId: currentUser.user.id,
    });

    if (!newPost) {
      return;
    }
    navigate("/");
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className="flex w-full max-w-5xl flex-col  gap-9">
        <FormField
          control={form.control}
          name="caption"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="shad-form_label">Caption</FormLabel>
              <FormControl>
                <Textarea
                  className="shad-textarea custom-scrollbar"
                  {...field}
                />
              </FormControl>
              <FormMessage className="shad-form_message" />
            </FormItem>
          )}
        />

        {/* <FormField
          control={form.control}
          name="imageUrl"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="shad-form_label">Add Photos</FormLabel>
              <FormControl>
                <FileUploader
                  fieldChange={field.onChange}
                  mediaUrl={post ? post.imageUrl : ""}
                />
              </FormControl>
              <FormMessage className="shad-form_message" />
            </FormItem>
          )}
        /> */}

        <FormField
          control={form.control}
          name="location"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="shad-form_label">Add Location</FormLabel>
              <FormControl>
                <Input type="text" className="shad-input" {...field} />
              </FormControl>
              <FormMessage className="shad-form_message" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="tags"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="shad-form_label">
                Add Tags (separated by comma " , ")
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="Art, Expression, Learn"
                  type="text"
                  className="shad-input"
                  {...field}
                />
              </FormControl>
              <FormMessage className="shad-form_message" />
            </FormItem>
          )}
        />

        <div className="flex items-center justify-end gap-4">
          <Button
            type="button"
            className="shad-button_dark_4"
            onClick={() => navigate(-1)}>
            Cancel
          </Button>
          <Button
            type="submit"
            className="shad-button_primary whitespace-nowrap"
            disabled={isCreatePostLoading}>
            {isCreatePostLoading && <Loader />}
            {action} Post
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default PostForm;
