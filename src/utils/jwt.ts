import config from "@/configs/config";
import { User } from "@prisma/client";
import jwt from "jsonwebtoken";
import { compare } from "bcrypt";

const getSignedJWT = (user: User) => {
  return jwt.sign({ id: user.id }, config.JWT_SECRET, {
    expiresIn: config.JWT_EXPIRES_IN
  });
};

const comparePassword = async (password: string, hashedPassword: string) => {
  return await compare(password, hashedPassword);
};

export { getSignedJWT, comparePassword };
