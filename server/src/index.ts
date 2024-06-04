import express, { NextFunction, Request, Response } from "express";
import sequelize from "./model/domain/dbConnection";
import UserRoute from "./routes/userRouter";
import DailyTaskRoute from "./routes/dailyTaskRouter";
import UserPetRoute from "./routes/userPetRouter";
import FolderRoute from "./routes/folderRouter";
import GoalRoute from "./routes/goalRouter";
import TaskRoute from "./routes/taskRouter";
import SubtaskRoute from "./routes/subtaskRouter";
import DailySubtaskRoute from "./routes/dailySubtaskRouter";
import AuthRouter from "./routes/authRouter";
import { handleError, logger } from "./middleware/errorHandler/HandleError";
import FoodRoute from "./routes/foodRouter";
import { insertFoodInDB } from "./utils/InsertFood";

const app = express();

app.use("/api", AuthRouter);
app.use("/api", UserRoute);
app.use("/api", DailyTaskRoute);
app.use("/api", UserPetRoute);
app.use("/api", GoalRoute);
app.use("/api", FolderRoute);
app.use("/api", TaskRoute);
app.use("/api", SubtaskRoute);
app.use("/api", FoodRoute);
app.use("/api", DailySubtaskRoute);
app.use(express.json());
app.use(handleError);

const start = async () => {
  try {
    await sequelize.authenticate().then(() => {
      console.log("Connection has been established successfully.");
    });
    await sequelize.sync();

    await insertFoodInDB();

    app.listen(process.env.PORT, () => {
      console.log(`server is listening on ${process.env.PORT}`);
    });
  } catch (err) {
    logger.error(err, "Index error");
    console.log(err);
  }
};

start();

function dropAllTables() {
  sequelize.drop();
  console.log("All tables dropped");
}
