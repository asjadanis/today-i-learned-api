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
 *      title: "Hello World"
 *      body: "This is a post"
 *      authorId: 231311231321
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
 *            $ref: '#/components/schemas/Post'
 *    responses:
 *      201:
 *        description: The post was successfully created
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Post'
 *      500:
 *        description: Internal server error
 *      400:
 *        description: Bad request
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
 *              $ref: '#/components/schemas/Post'
 *      404:
 *        description: The post was not found
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
 *            $ref: '#/components/schemas/Post'
 *    responses:
 *      200:
 *        description: The post was updated
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Post'
 *      404:
 *        description: The post was not found
 *      500:
 *        description: Internal server error
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
 *        responses:
 *          200:
 *            description: The post was deleted
 *            content:
 *              application/json:
 *                schema:
 *                  $ref: '#/components/schemas/Post'
 *          404:
 *            description: The post was not found
 *          500:
 *            description: Internal server error
 *
 *
 *
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
