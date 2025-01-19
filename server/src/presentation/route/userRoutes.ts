import express from 'express';
import userController from "../controller/userController";
import authMiddleware from "../../middleware/authMiddleware";

const router = express.Router()

router.get('/', authMiddleware.authenticateToken, userController.currentUser)

export default router