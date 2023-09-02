import { User } from "@prisma/client";
import PrismaInstance from "../db";
import bcrypt from "bcrypt";
import ApiError from "@/utils/ApiError";

const prisma = PrismaInstance.getInstance();

const getUserById = async (id: string) => {
  return prisma.user.findUnique({
    where: { id },
    select: { email: true, username: true, password: false, id: true }
  });
};

const userExists = async (email: string) => {
  return prisma.user.findUnique({ where: { email } });
};

const createUser = async (user: User) => {
  const userAlreadyExists = await userExists(user.email);

  if (userAlreadyExists) {
    throw new ApiError("User already exists", 409);
  }

  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(user.password, salt);

  return prisma.user.create({ data: { ...user } });
};

const updateUser = async (id: string, user: User) => {
  return prisma.user.update({ where: { id }, data: { ...user } });
};

const deleteUser = async (id: string) => {
  return prisma.user.delete({ where: { id } });
};

const getUserPosts = async (id: string) => {
  return prisma.user.findUnique({ where: { id } }).posts();
};

export {
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  userExists,
  getUserPosts
};
