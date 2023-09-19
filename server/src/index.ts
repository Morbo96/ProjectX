import express, { Request, Response } from "express";
import sequelize from "./model/domain/db";
import UserRoute from "./routes/userRouter";
import { User } from "./model/domain/entities/users";
import DailyTaskRoute from "./routes/dailyTaskRouter";

const app = express();

app.use("/api", UserRoute);
app.use("/api", DailyTaskRoute);
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