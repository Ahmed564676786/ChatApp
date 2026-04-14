// controllers/userController.js

import { addUser, getUser, removeUser } from "../models/userModel.js";

// ==============================
// ➕ ADD USER (API)
// ==============================
export const createUser = (req, res) => {
  try {
    const { id, name } = req.body;

    const newUser = {
      id,
      name,
      socketId: null,
      isOnline: false
    };

    addUser(newUser);

    res.status(201).json({
      message: "User created",
      user: newUser
    });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ==============================
// 🔍 GET USER BY ID
// ==============================
export const fetchUser = (req, res) => {
  try {
    const { id } = req.params;

    const user = getUser(id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json(user);

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ==============================
// ❌ REMOVE USER (API)
// ==============================
export const deleteUser = (req, res) => {
  try {
    const { socketId } = req.params;

    const removedUser = removeUser(socketId);

    if (!removedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json({
      message: "User removed",
      user: removedUser
    });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};