// Netflix clone/netflix-clone-backend/routes/authRoutes.js
import express from "express";
import { login, register } from "../controllers/authController.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);

export default router;