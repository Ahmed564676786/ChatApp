// controllers/userController.js

import { addUser, getUserById,removeUserBySocketId,removeUserByUserId } from "../models/users.js";

// ==============================
// ➕ ADD USER (API)
// ==============================
export const createUser = (req, res) => {
  try {
    const { id, name ,socketId,isOnline} = req.body;
    const newUser = {
      id,
      name,
      socketId,
      isOnline,
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
export const fetchUserById = (req, res) => {
  try {
    const { id } = req.params;

    const user = getUserById(id);

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
export const deleteUserBySocketId = (req, res) => {
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


// middleware functions 


export const deleteUserByUserId = (req,res) => {

    const   userId = req.params;
    const removedUser  = removeUserByUserId(userId);
    try{

      if(!removedUser){

         res.status(404).json({error:"User not found"});
      }

      //below code will only run if there is user 

      res.json({
          message:"Deleted User",
          user : removedUser
      });
          
    }
    catch(err)
    {

        res.status(500).json({message:err.message});
    }
}