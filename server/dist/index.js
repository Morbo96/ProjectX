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
const dbConnection_1 = __importDefault(require("./model/domain/dbConnection"));
const userRouter_1 = __importDefault(require("./routes/userRouter"));
const dailyTaskRouter_1 = __importDefault(require("./routes/dailyTaskRouter"));
const userPetRouter_1 = __importDefault(require("./routes/userPetRouter"));
const folderRouter_1 = __importDefault(require("./routes/folderRouter"));
const goalRouter_1 = __importDefault(require("./routes/goalRouter"));
const taskRouter_1 = __importDefault(require("./routes/taskRouter"));
const subtaskRouter_1 = __importDefault(require("./routes/subtaskRouter"));
const dailySubtaskRouter_1 = __importDefault(require("./routes/dailySubtaskRouter"));
const authRouter_1 = __importDefault(require("./routes/authRouter"));
const HandleError_1 = require("./middleware/errorHandler/HandleError");
const foodRouter_1 = __importDefault(require("./routes/foodRouter"));
const app = (0, express_1.default)();
app.use("/api", authRouter_1.default);
app.use("/api", userRouter_1.default);
app.use("/api", dailyTaskRouter_1.default);
app.use("/api", userPetRouter_1.default);
app.use("/api", goalRouter_1.default);
app.use("/api", folderRouter_1.default);
app.use("/api", taskRouter_1.default);
app.use("/api", subtaskRouter_1.default);
app.use("/api", foodRouter_1.default);
app.use("/api", dailySubtaskRouter_1.default);
app.use(express_1.default.json());
app.use(HandleError_1.handleError);
const start = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield dbConnection_1.default.authenticate().then(() => {
            console.log("Connection has been established successfully.");
        });
        yield dbConnection_1.default.sync();
        app.listen(process.env.PORT, () => {
            console.log(`server is listening on ${process.env.PORT}`);
        });
    }
    catch (err) {
        HandleError_1.logger.error(err, "Index error");
        console.log(err);
    }
});
start();
function dropAllTables() {
    dbConnection_1.default.drop();
    console.log("All tables dropped");
}
