import { Comment } from "@prisma/client";
import PrismaInstance from "../db";

const prisma = PrismaInstance.getInstance();

const addComment = async (comment: Comment) => {
  return prisma.comment.create({ data: { ...comment } });
};

const updateComment = async (id: string, comment: Comment) => {
  return prisma.comment.update({ where: { id }, data: { ...comment } });
};

const deleteComment = async (id: string) => {
  return prisma.comment.delete({ where: { id } });
};

const getCommentFromPost = async (id: string) => {
  return prisma.comment.findMany({ where: { postId: id } });
};

export { addComment, getCommentFromPost, updateComment, deleteComment };
