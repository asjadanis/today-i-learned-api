import tryCatchWrapper from "@/utils/tryCatchWrapper";
import { Request, Response } from "express";
import * as userService from "@/services/user.service";
import httpStatus from "@/utils/httpStatus";

const getUserById = tryCatchWrapper(async (req: Request, res: Response) => {
  const { id } = req.params;
  const user = await userService.getUserById(id);
  res.status(httpStatus.OK).json({ success: true, data: { user } });
});

const getLoggedInUser = tryCatchWrapper(async (req: Request, res: Response) => {
  const { id } = req.user;
  const user = await userService.getUserById(id);
  res.status(httpStatus.OK).json({ success: true, data: { user } });
});

const updateUser = tryCatchWrapper(async (req: Request, res: Response) => {
  const { id } = req.params;
  const user = await userService.updateUser(id, req.body);
  res.status(httpStatus.OK).json({ data: user });
});

const deleteUser = tryCatchWrapper(async (req: Request, res: Response) => {
  const { id } = req.params;
  const user = await userService.deleteUser(id);
  res.status(httpStatus.OK).json({ data: user });
});

const getUserPosts = tryCatchWrapper(async (req: Request, res: Response) => {
  const { id } = req.params;
  const posts = await userService.getUserPosts(id);
  res.status(httpStatus.OK).json({ data: posts });
});

export { getUserById, updateUser, deleteUser, getLoggedInUser, getUserPosts };
