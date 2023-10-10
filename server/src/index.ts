import express from "express";
import sequelize from "./model/domain/dbConnection";
import UserRoute from "./routes/userRouter";
import DailyTaskRoute from "./routes/dailyTaskRouter";
import UserPetRoute from "./routes/userPetRouter";
import FolderRoute from "./routes/folderRouter";
import GoalRoute from "./routes/goalRouter";
import TaskRoute from "./routes/taskRouter";
import SubtaskRoute from "./routes/subtaskRouter";
import DailySubtaskRoute from "./routes/dailySubtaskRouter";

const app = express();

app.use("/api", UserRoute);
app.use("/api", DailyTaskRoute);
app.use("/api",UserPetRoute)
app.use("/api",GoalRoute)
app.use("/api",FolderRoute)
app.use("/api",TaskRoute)
app.use("/api",SubtaskRoute)
app.use("/api",DailySubtaskRoute)
app.use(express.json());

const port = 3000;

const start = async () => {
  try {
    await sequelize.authenticate().then(() => {
      console.log("Connection has been established successfully.");
    });
    await sequelize.sync();

    app.listen(port, () => {
      console.log(`server is listening on ${port}`);
    });
  } catch (err) {
    console.log(err);
  }
};

start();

function dropAllTables() {
  sequelize.drop();
  console.log("All tables dropped");
}

