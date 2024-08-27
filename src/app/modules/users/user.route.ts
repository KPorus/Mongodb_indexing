import express from "express";
import { userController } from "./user.controller";
const router = express.Router();

router.get('/getUsers', userController.getUsers);
router.post('/getOneUsers', userController.getOneuser);

export const userRouter = router;