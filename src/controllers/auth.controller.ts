import tryCatchWrapper from "@/utils/tryCatchWrapper";
import { Request, Response } from "express";
import { getSignedJWT } from "@/utils/jwt";
import * as userService from "@/services/user.service";
import { compare } from "bcrypt";
import ApiError from "@/utils/ApiError";
import { User } from "@prisma/client";
import httpStatus from "@/utils/httpStatus";

type key = keyof User;

function omitKeys(user: User, keys: key[]): Omit<User, key> {
  return Object.fromEntries(
    Object.entries(user).filter(([key]) => !keys.includes(key as key))
  );
}

const createUser = tryCatchWrapper(async (req: Request, res: Response) => {
  const user = await userService.createUser(req.body);

  const token = getSignedJWT(user);

  res.status(httpStatus.CREATED).json({ success: true, data: { user, token } });
});

const loginUser = tryCatchWrapper(async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const user = await userService.userExists(email);

  if (!user) {
    throw new ApiError("User not found", 404);
  }

  const isMatch = await compare(password, user.password);

  if (!isMatch) {
    throw new ApiError("Incorrect credentials", 401);
  }

  const keysToOmit = ["password"] as key[];
  const userWithoutPassword = omitKeys(user, keysToOmit);

  const token = getSignedJWT(user);

  res
    .status(httpStatus.OK)
    .json({ success: true, data: { userWithoutPassword, token } });
});

export { createUser, loginUser };
