// routes/userRoutes.js

import express from "express";
import { createUser, fetchUser, deleteUser } from "../controllers/userController.js";

const router = express.Router();

router.post("/user", createUser);
router.get("/user/:id", fetchUser);
router.delete("/user/:socketId", deleteUser);

export default router;