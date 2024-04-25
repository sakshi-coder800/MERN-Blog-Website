import express from 'express';
import { getAllUser, loginUser, registerUser } from '../controllers/userControllers.js';



const router= express.Router();

// get all users || GET
router.get("/all-users",getAllUser);

// Create  users || POST
router.post("/register",registerUser);

// Login user || POST
router.post("/login",loginUser);

// module.exports=router;
export default router;