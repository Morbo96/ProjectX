import express from "express";
import sequelize from "./model/domain/dbConnection";
import UserRoute from "./routes/userRouter";
import DailyTaskRoute from "./routes/dailyTaskRouter";
import UserPetRoute from "./routes/userPetRouter";
import FolderRoute from "./routes/folderRouter";

const app = express();

app.use("/api", UserRoute);
app.use("/api", DailyTaskRoute);
app.use("/api",UserPetRoute)
app.use("/api",FolderRoute)
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