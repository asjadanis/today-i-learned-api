import * as postController from "@/controllers/post.contoller";
import authMiddleware from "@/middlewares/auth.middleware";
import { Router } from "express";

const router = Router();

/**
 * @swagger
 * components:
 *  schemas:
 *   Post:
 *    type: object
 *    required:
 *      - title
 *      - body
 *      - userId
 *    properties:
 *      title:
 *        type: string
 *        description: The post title
 *      body:
 *        type: string
 *        description: The post body
 *      authorId:
 *        type: string
 *        description: The id of the user who created the post
 *    example:
 *      id: 231311231321
 *      slug: hello-world
 *      title: "Hello World"
 *      body: "This is a post"
 *      authorId: 231311231321
 *      createdAt: 2021-01-01T00:00:00.000Z
 *      updatedAt: 2021-01-01T00:00:00.000Z
 *      upvotes: 0
 *      downvotes: 0
 *
 */

/**
 * @swagger
 * tags:
 * name: Posts
 * description: The posts managing API
 * /posts:
 *  post:
 *    security:
 *      - bearerAuth: []
 *    summary: Create a new post
 *    tags: [Posts]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              title:
 *                type: string
 *                example: Hello World
 *              body:
 *                type: string
 *                example: This is a post
 *              authorId:
 *                type: string
 *                example: 231311231321
 *              slug:
 *                type: string
 *                example: hello-world
 *
 *    responses:
 *      201:
 *        description: The post was successfully created
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *               message:
 *                type: string
 *                example: success
 *               data:
 *                $ref: '#/components/schemas/Post'
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
 *  get:
 *   summary: Get all posts
 *   tags: [Posts]
 *   responses:
 *     200:
 *       description: The list of posts
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *              message:
 *                type: string
 *                example: success
 *              data:
 *                type: array
 *                items:
 *                  $ref: '#/components/schemas/Post'
 *     500:
 *      description: Internal server
 *
 * /posts/{id}:
 *  get:
 *    summary: Get a post by id
 *    tags: [Posts]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: Post id
 *    responses:
 *      200:
 *        description: The post description by id
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                message:
 *                  type: string
 *                  example: success
 *                data:
 *                  $ref: '#/components/schemas/Post'
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
 *  put:
 *    summary: Update a post by id
 *    tags: [Posts]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: Post id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              title:
 *                type: string
 *                example: Hello World
 *              body:
 *                type: string
 *                example: This is a post
 *              authorId:
 *                type: string
 *                example: 231311231321
 *              slug:
 *                type: string
 *                example: hello-world
 *    responses:
 *      200:
 *        description: The post was updated
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                message:
 *                  type: string
 *                  example: success
 *                data:
 *                  $ref: '#/components/schemas/Post'
 *      404:
 *        description: The post was not found
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                message:
 *                  type: string
 *                  example: Post Not found
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
 *    summary: Delete a post by id
 *    tags: [Posts]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: Post id
 *    responses:
 *      200:
 *        description: The post was deleted
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                message:
 *                  type: string
 *                  example: success
 *                data:
 *                  $ref: '#/components/schemas/Post'
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
  .route("/")
  .get(postController.getPosts)
  .post(authMiddleware, postController.createPost);

router
  .route("/:id")
  .get(postController.getPost)
  .put(authMiddleware, postController.updatePost)
  .delete(authMiddleware, postController.deletePost);

export default router;
