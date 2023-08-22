import tryCatchWrapper from "@/utils/tryCatchWrapper";
import { Request, Response } from "express";
import { getSignedJWT } from "@/utils/jwt";
import * as userService from "@/services/user.service";

const getUser = tryCatchWrapper(async (req: Request, res: Response) => {
  const { id } = req.params;
  const user = await userService.getUser(id);
  res.status(200).json({ data: user });
});

const createUser = tryCatchWrapper(async (req: Request, res: Response) => {
  const user = await userService.createUser(req.body);

  const token = getSignedJWT(user);

  res.status(201).json({ success: true, data: { user, token } });
});

const updateUser = tryCatchWrapper(async (req: Request, res: Response) => {
  const { id } = req.params;
  const user = await userService.updateUser(id, req.body);
  res.status(200).json({ data: user });
});

const deleteUser = tryCatchWrapper(async (req: Request, res: Response) => {
  const { id } = req.params;
  const user = await userService.deleteUser(id);
  res.status(200).json({ data: user });
});

export { getUser, createUser, updateUser, deleteUser };
