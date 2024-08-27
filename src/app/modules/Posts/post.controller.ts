import { Request, Response } from "express"
import { CatchAsync } from "../../../Shared/CatchAsync"
import { postService } from "./posts.service"
import sendResponse from "../../../Shared/sendResponse"


const getSpecificPost = CatchAsync(
    async (req:Request, res:Response) => {
        // Implement your logic here
        const data = req.body.data
        console.log(data);
        const result = await postService.getSpecificPost(data)
        sendResponse(res,{
            success: true,
            statusCode: 200,
            message: "Post retrieved successfully",
            data: result,
        })
    }
)

export const postsController = {
    getSpecificPost,
}