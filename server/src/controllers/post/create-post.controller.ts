import { db } from "@/db";
// import { uploads } from "@/shared/cloudinary-upload";
import { BadRequestError } from "@/shared/custom-error-handler";
// import { UploadApiResponse } from "cloudinary";
import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { v4 as uuidV4 } from "uuid";

export const createPost = async (req: Request, res: Response) => {
  const { tags, location, caption, userId } = req.body;

  const postImagePublicId = uuidV4();
  // const uploadResult: UploadApiResponse = (await uploads(
  //   post?.imageUrl,
  //   `${postImagePublicId}`,
  //   true,
  //   true
  // )) as UploadApiResponse;
  // if (!uploadResult.public_id) {
  //   throw new BadRequestError("File upload 오류", "createPost() method error");
  // }

  const transformTags = tags?.replace(/ /g, "").split(",") || [];

  const newPost = await db.post.create({
    data: {
      caption: caption,
      imagePublicId: postImagePublicId,
      // imageUrl: uploadResult?.secure_url,
      tags: transformTags,
      userId,
      location,
    },
  });
  if (!newPost) {
    throw new BadRequestError(
      "Post를 생성할 수 없습니다.",
      "createPost() method error,,,"
    );
  }

  res
    .status(StatusCodes.OK)
    .json({ message: "새로운 Post를 생성하였습니다.", post: newPost });
};
