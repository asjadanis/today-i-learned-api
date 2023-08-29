import jwt from "jsonwebtoken";
import tryCatchWrapper from "@/utils/tryCatchWrapper";
import ApiError from "@/utils/ApiError";
import { NextFunction, Request, Response } from "express";
import httpStatus from "@/utils/httpStatus";
import config from "@/configs/config";
import { getUserById } from "@/services/user.service";

const authMiddleware = tryCatchWrapper(
  async (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization?.split("Bearer ")[1];

    if (!token) {
      throw new ApiError("Unauthorized", httpStatus.UNAUTHORIZED);
    }

    try {
      const decoded = jwt.verify(token, config.JWT_SECRET);

      if (typeof decoded === "object" && decoded.id) {
        const user = await getUserById(decoded.id);
        if (!user) {
          throw new ApiError("Unauthorized", httpStatus.UNAUTHORIZED);
        }
        req.user = user;
        next();
      }
    } catch (error) {
      throw new ApiError("Unauthorized", httpStatus.UNAUTHORIZED);
    }
  }
);

export default authMiddleware;
