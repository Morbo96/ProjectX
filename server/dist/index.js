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
const express_1 = __importDefault(require("express"));
const db_1 = __importDefault(require("./model/domain/db"));
const userRouter_1 = __importDefault(require("./routes/userRouter"));
const dailyTaskRouter_1 = __importDefault(require("./routes/dailyTaskRouter"));
const app = (0, express_1.default)();
app.use("/api", userRouter_1.default);
app.use("/api", dailyTaskRouter_1.default);
app.use(express_1.default.json());
const port = 3000;
const start = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield db_1.default.authenticate().then(() => {
            console.log("Connection has been established successfully.");
        });
        yield db_1.default.sync();
        app.listen(port, () => {
            console.log(`server is listening on ${port}`);
        });
    }
    catch (err) {
        console.log(err);
    }
});
start();
