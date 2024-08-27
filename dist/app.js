"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
require("dotenv").config();
const database_1 = __importDefault(require("./config/database"));
// import router from './app/Router/router';
// import toobusy from "toobusy-js";
const numberOfProxies = 1;
const app = (0, express_1.default)();
app.use(express_1.default.json());
//Middleware
// app.use(helmet())
app.use((0, cors_1.default)());
// app.use(morganMiddleware); // Log HTTP requests
app.disable("x-powered-by");
app.set("trust proxy", numberOfProxies);
app.use(express_1.default.urlencoded({ extended: true }));
// app.use('/api/v1', router)
app.use('/test', (req, res, next) => {
    throw new Error("Test");
});
// Handler for route-not-found
app.all('*', (req, res, next) => {
    const err = new Error("Invalid Route.");
    next(err);
});
// app.use(globalError);
(0, database_1.default)();
exports.default = app;
