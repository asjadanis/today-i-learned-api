import config from "@/configs/config";
import { User } from "@prisma/client";
import jwt from "jsonwebtoken";

const getSignedJWT = (user: User) => {
  return jwt.sign({ id: user.id }, config.JWT_SECRET, {
    expiresIn: config.JWT_EXPIRES_IN
  });
};

export { getSignedJWT };
