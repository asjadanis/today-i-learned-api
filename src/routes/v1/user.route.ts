import { Router } from "express";
import * as userController from "@/controllers/user.controller";
import authMiddleware from "@/middlewares/auth.middleware";

const router = Router();

/**
 * @swagger
 * components:
 *  schemas:
 *   User:
 *    type: object
 *    required:
 *      - email
 *      - username
 *      - password
 *    properties:
 *      id:
 *        type: string
 *        description: Autogenerated user id
 *      email:
 *        type: string
 *        description: User email
 *      username:
 *        type: string
 *        description: User username
 *      password:
 *        type: string
 *        description: User password
 *    example:
 *      id: 231311231321
 *      email: test@gmail.com
 *      username: test
 *      password: test
 *
 *
 */

/**
 * @swagger
 * description: API for managing users
 * /users/profile:
 *  get:
 *    security:
 *      - bearerAuth: []
 *    summary: Get current logged in user's profile
 *    tags:
 *      - User
 *    responses:
 *      201:
 *        description: User profile data
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *               message:
 *                type: string
 *                example: success
 *               data:
 *                type: object
 *                properties:
 *                  user:
 *                    type: object
 *                    properties:
 *                      email:
 *                        type: string
 *                        example: test@gmail.com
 *                      username:
 *                        type: string
 *                        example: test
 *                      id:
 *                        type: string
 *                        example: 231311231321
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
 * /users/{id}:
 *  get:
 *    summary: Get a user by id
 *    tags:
 *      - User
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: User id
 *    responses:
 *      200:
 *        description: The User data by id
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                message:
 *                  type: string
 *                  example: success
 *                data:
 *                  type: object
 *                  properties:
 *                    user:
 *                      type: object
 *                      properties:
 *                        email:
 *                          type: string
 *                          example: test@gmail.com
 *                        username:
 *                          type: string
 *                          example: test
 *                        id:
 *                          type: string
 *                          example: 231311231321
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
 *    security:
 *      - bearerAuth: []
 *    summary: Update a user by id
 *    tags:
 *      - User
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: User id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              email:
 *                type: string
 *                example: test@gmail.com
 *              username:
 *                type: string
 *                example: testuser
 *              password:
 *                type: string
 *                example: testpassword
 *    responses:
 *      200:
 *        description: The user was updated
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                message:
 *                  type: string
 *                  example: success
 *                data:
 *                  type: object
 *                  properties:
 *                    user:
 *                      type: object
 *                      properties:
 *                        email:
 *                          type: string
 *                          example: test@gmail.com
 *                        username:
 *                          type: string
 *                          example: test
 *                        id:
 *                          type: string
 *                          example: 231311231321
 *      404:
 *        description: The user was not found
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                message:
 *                  type: string
 *                  example: User Not found
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
 *    summary: Delete a user by id
 *    tags:
 *      - User
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: Delete user by id
 *    responses:
 *      200:
 *        description: The user was deleted
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                message:
 *                  type: string
 *                  example: success
 *                data:
 *                  type: object
 *                  properties:
 *                    user:
 *                      type: object
 *                      properties:
 *                        email:
 *                          type: string
 *                          example: test@gmail.com
 *                        username:
 *                          type: string
 *                          example: test
 *                        id:
 *                          type: string
 *                          example: 231311231321
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

router.route("/profile").get(authMiddleware, userController.getLoggedInUser);
router
  .route("/:id")
  .get(userController.getUserById)
  .put(authMiddleware, userController.updateUser)
  .delete(authMiddleware, userController.deleteUser);

router.route("/:id/posts").get(userController.getUserPosts);

export default router;
