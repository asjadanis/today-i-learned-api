import ApiError from "@/utils/ApiError";
import httpStatus from "@/utils/httpStatus";
import logger from "@/utils/logger";
import {
  PrismaClientKnownRequestError,
  PrismaClientValidationError
} from "@prisma/client/runtime/library";
import { NextFunction, Request, Response } from "express";

type ErrorInstance = Error | ApiError | PrismaClientKnownRequestError;

const errorHandler = (
  err: ErrorInstance,
  req: Request,
  res: Response,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  next: NextFunction
) => {
  let error: ApiError = err as ApiError;

  if (err instanceof PrismaClientKnownRequestError) {
    switch (err.code) {
      // Unique constraint violation
      case "P2002":
        error = new ApiError(
          `Bad Request, unique constriant failed on ${err.meta?.target}`,
          httpStatus.BAD_REQUEST
        );
        break;
      // Record not found
      case "P2025":
        error = new ApiError(
          "The requested record was not found.",
          httpStatus.BAD_REQUEST
        );
        break;

      default:
        return res
          .status(500)
          .json({ message: "An unexpected database error occurred." });
    }
  } else if (err instanceof PrismaClientValidationError) {
    const statusCode = httpStatus.BAD_REQUEST;
    const message = "Bad Request, Validation failed.";
    error = new ApiError(message, statusCode);
  } else if (err instanceof ApiError) {
    error = new ApiError(err.message, err.statusCode);
  } else if (err instanceof Error) {
    const statusCode = httpStatus.INTERNAL_SERVER_ERROR;
    const message = "Something went wrong!!!";
    error = new ApiError(message, statusCode);
  }

  logger.error(error.message, error);

  res.status(error.statusCode).json({
    success: false,
    data: {
      message: error.message
    }
  });
};

export default errorHandler;
