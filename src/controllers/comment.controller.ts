import tryCatchWrapper from "@/utils/tryCatchWrapper";
import { Request, Response } from "express";
import * as commentService from "@/services/comment.service";
import httpStatus from "@/utils/httpStatus";

const addComment = tryCatchWrapper(async (req: Request, res: Response) => {
  const comment = await commentService.addComment(req.body);
  res.status(httpStatus.CREATED).json({ message: "success", data: comment });
});

const updateComment = tryCatchWrapper(async (req: Request, res: Response) => {
  const { id } = req.params;
  const comment = await commentService.updateComment(id, req.body);
  res.status(httpStatus.OK).json({ message: "success", data: comment });
});

const deleteComment = tryCatchWrapper(async (req: Request, res: Response) => {
  const { id } = req.params;
  const comment = await commentService.deleteComment(id);
  res.status(httpStatus.OK).json({ message: "success", data: comment });
});

const getCommentFromPost = tryCatchWrapper(
  async (req: Request, res: Response) => {
    const { id } = req.params;
    const comments = await commentService.getCommentFromPost(id);
    res.status(httpStatus.OK).json({ message: "success", data: comments });
  }
);

export { addComment, getCommentFromPost, updateComment, deleteComment };
