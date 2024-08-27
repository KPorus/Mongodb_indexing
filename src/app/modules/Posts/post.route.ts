import express from "express";
import { postsController } from "./post.controller";
const router = express.Router();

router.post("/get_specific", postsController.getSpecificPost);

export const postRouter =router