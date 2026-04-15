// routes/userRoutes.js

import express from "express";
import { createUser, fetchUser, deleteUser } from "../controllers/userController.js";

const router = express.Router();

/**
 * @swagger
 * /api/user:
 *   post:
 *     summary: Create a new user
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - id
 *               - name
 *             properties:
 *               id:
 *                 type: string
 *                 example: "1"
 *               name:
 *                 type: string
 *                 example: "Ahmed"
 *     responses:
 *       201:
 *         description: User created successfully
 */
router.post("/user", createUser);

/**
 * @swagger
 * /api/user/{id}:
 *   get:
 *     summary: Get user by ID
 *     tags: [Users]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *           example: "1"
 *     responses:
 *       200:
 *         description: User found
 *       404:
 *         description: User not found
 */
router.get("/user/:id", fetchUser);

/**
 * @swagger
 * /api/user/{socketId}:
 *   delete:
 *     summary: Delete user by socket ID
 *     tags: [Users]
 *     parameters:
 *       - name: socketId
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *           example: "abc123"
 *     responses:
 *       200:
 *         description: User deleted
 *       404:
 *         description: User not found
 */
router.delete("/user/:socketId", deleteUser);

export default router;