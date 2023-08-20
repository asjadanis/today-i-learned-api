import { Post } from "@prisma/client";
import PrismaInstance from "db";

const prisma = PrismaInstance.getInstance();

const createPost = async (post: Post) => {
  return prisma.post.create({ data: { ...post } });
};

const getPosts = async () => {
  return prisma.post.findMany();
};

const getPost = async (id: string) => {
  return prisma.post.findUnique({ where: { id } });
};

const updatePost = async (id: string, post: Post) => {
  return prisma.post.update({ where: { id }, data: { ...post } });
};

const deletePost = async (id: string) => {
  return prisma.post.delete({ where: { id } });
};

export { createPost, getPosts, getPost, updatePost, deletePost };
