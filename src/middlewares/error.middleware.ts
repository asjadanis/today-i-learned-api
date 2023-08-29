import ApiError from "@/utils/ApiError";
import logger from "@/utils/logger";
import { NextFunction, Request, Response } from "express";

const errorHandler = (
  err: Error | ApiError,
  req: Request,
  res: Response,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  next: NextFunction
) => {
  let error = err as ApiError;

  if (error instanceof Error) {
    const statusCode = error instanceof ApiError ? error.statusCode : 500;
    const message = error.message || "Something went wrong!!!";
    error = new ApiError(message, statusCode);
  }

  logger.error(error.message, error);

  res
    .status(error.statusCode || 500)
    .json({ success: false, message: err.message });
};

export default errorHandler;
