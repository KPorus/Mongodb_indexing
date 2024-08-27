import express, { Application } from 'express';
import cors from 'cors';
require("dotenv").config();
import connectDB from './config/database';
import router from './app/Router/router';
// import toobusy from "toobusy-js";


const numberOfProxies = 1;
const app: Application = express();
app.use(express.json());

//Middleware
// app.use(helmet())
app.use(cors());
// app.use(morganMiddleware); // Log HTTP requests
app.disable("x-powered-by");
app.set("trust proxy", numberOfProxies);
app.use(express.urlencoded({ extended: true }));


app.use('/api/v1', router)
app.use('/test', (req,res,next)=>{
    throw new Error("Test");
})
// Handler for route-not-found
app.all('*',(req, res,next) =>
{
    const err = new Error("Invalid Route.")
    next(err);
});
// app.use(globalError);
connectDB();
export default app;