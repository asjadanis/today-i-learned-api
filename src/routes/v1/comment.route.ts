import * as commentController from "@/controllers/comment.controller";
import authMiddleware from "@/middlewares/auth.middleware";
import { Router } from "express";

const router = Router();

/**
 * @swagger
 * components:
 *  schemas:
 *   Comment:
 *    type: object
 *    required:
 *      - body
 *      - userId
 *      - postId
 *    properties:
 *      id:
 *        type: string
 *        description: Autogenerated id
 *      body:
 *        type: string
 *        description: The comment body
 *      upvotes:
 *        type: number
 *        description: The number of upvotes
 *      downvotes:
 *        type: number
 *        description: The number of downvotes
 *      postId:
 *        type: string
 *        description: The id of the post
 *      userId:
 *        type: string
 *        description: The id of the user who created the comment
 *      createdAt:
 *        type: string
 *        description: The date the comment was created
 *        format: date-time
 *      updatedAt:
 *        type: string
 *        description: The date the comment was updated
 *        format: date-time
 *      replies:
 *        type: array
 *        items:
 *          $ref: '#/components/schemas/Comment'
 *          description: The replies to the comment
 *      parentId:
 *        type: string
 *        description: The id of the parent comment
 *   example:
 *    id: 231311231321
 *    body: "This is a comment"
 *    upvotes: 0
 *    downvotes: 0
 *    postId: 231311231321
 *    userId: 231311231321
 *    createdAt: 2021-01-01T00:00:00.000Z
 *    updatedAt: 2021-01-01T00:00:00.000Z
 *    replies: []
 *    parentId: 231311231321
 *
 *
 */

/**
 * @swagger
 * description: The comments managing API
 * /:id:
 *  put:
 *    security:
 *      - bearerAuth: []
 *    summary: Create a new post
 *    tags:
 *      - Comments
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              body:
 *                type: string
 *                example: This is a comment
 *              userId:
 *                type: string
 *                example: 231311231321
 *              postId:
 *                type: string
 *                example: 231311231321
 *              parentId:
 *                type: string
 *                example: 231311231321
 *
 *    responses:
 *      201:
 *        description: The comment was successfully added
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *               message:
 *                type: string
 *                example: success
 *               data:
 *                $ref: '#/components/schemas/Comment'
 *      500:
 *        description: Internal server error
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                message:
 *                  type: string
 *                  example: Internal server error
 *      400:
 *        description: Bad request
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                message:
 *                  type: string
 *                  example: Bad request
 *      401:
 *        description: Unauthorized
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                message:
 *                  type: string
 *                  example: Unauthorized
 *
 *  delete:
 *    security:
 *      - bearerAuth: []
 *    summary: Delete a comment by id
 *    tags:
 *      - Comments
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: Post id
 *    responses:
 *      200:
 *        description: The comment was deleted
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                message:
 *                  type: string
 *                  example: success
 *                data:
 *                  $ref: '#/components/schemas/Comment'
 *
 *      500:
 *        description: Internal server error
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                message:
 *                  type: string
 *                  example: Internal server error
 *      400:
 *        description: Bad request
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                message:
 *                  type: string
 *                  example: Bad request
 *
 *      401:
 *        description: Unauthorized
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                message:
 *                  type: string
 *                  example: Unauthorized
 */

router
  .route("/:id")
  .put(authMiddleware, commentController.updateComment)
  .delete(authMiddleware, commentController.deleteComment);

export default router;
