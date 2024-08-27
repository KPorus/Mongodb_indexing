"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const port = process.env.port || 5000;
let server;
process.on("uncaughtException", err => {
    process.exit(1);
});
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            app_1.default.listen(port, () => {
                console.log(`Server is runing at ${port}`);
            });
        }
        catch (error) {
            console.error("Error starting server:", error);
        }
        process.on("unhandledRejection", error => {
            if (server) {
                server.close(() => {
                    console.log(error);
                    process.exit(1);
                });
            }
            else {
                process.exit(1);
            }
        });
    });
}
main();
process.on("SIGTERM", () => {
    console.log("SIGTERM is received!");
    if (server) {
        server.close();
    }
});
