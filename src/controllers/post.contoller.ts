import tryCatchWrapper from "@/utils/tryCatchWrapper";
import { Request, Response } from "express";
import * as postService from "@/services/post.service";

const getPosts = tryCatchWrapper(async (req: Request, res: Response) => {
  const posts = await postService.getPosts();
  res.status(200).json({ data: posts });
});

const createPost = tryCatchWrapper(async (req: Request, res: Response) => {
  const post = await postService.createPost(req.body);
  res.status(201).json({ data: post });
});

const getPost = tryCatchWrapper(async (req: Request, res: Response) => {
  const { id } = req.params;
  const post = await postService.getPost(id);
  res.status(200).json({ data: post });
});

const updatePost = tryCatchWrapper(async (req: Request, res: Response) => {
  const { id } = req.params;
  const post = await postService.updatePost(id, req.body);
  res.status(200).json({ data: post });
});

const deletePost = tryCatchWrapper(async (req: Request, res: Response) => {
  const { id } = req.params;
  const post = await postService.deletePost(id);
  res.status(200).json({ data: post });
});

export { createPost, getPosts, getPost, updatePost, deletePost };
