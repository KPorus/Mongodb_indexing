import express from 'express'
import { userRouter } from '../modules/users/user.route';
import { postRouter } from '../modules/Posts/post.route';

const router = express.Router();

const moduleRoute = [
    {
        path: '/user',
        router: userRouter
    },
    {
        path: '/posts',
        router: postRouter
    }
]

moduleRoute.forEach((route) => router.use(route.path, route.router));

export default router;