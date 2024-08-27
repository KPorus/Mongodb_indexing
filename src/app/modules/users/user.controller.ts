import { CatchAsync } from './../../../Shared/CatchAsync';
import { NextFunction, Request, Response } from "express";
import { userService } from "./user.service";
import sendResponse from '../../../Shared/sendResponse';

const getUsers = CatchAsync(
    async (req: Request, res: Response, next: NextFunction)=>{
        const users = await userService.getUsers();
        return sendResponse(res, {
            success: true,
            statusCode: 200,
            message: "Fetch users successfully",
            data: users,
        })
    }
)

const getOneuser = CatchAsync(
    async (req: Request, res: Response, next: NextFunction) => {
        const userId = req.body.userId;
        const user = await userService.getUserById(userId);
        if (user) {
            return sendResponse(res, {
                success: true,
                statusCode: 200,
                message: "Fetch specific user successfully",
                data: user,
            })
        }
    }
)
export const userController = {
    getUsers,
    getOneuser
}