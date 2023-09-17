import express, { Request, Response } from "express";
import sequelize from "./model/domain/db";
import UserRoute from "./routes/userRouter";
import { user } from "./model/domain/entities/users";

const app = express();

app.use("/api", UserRoute);
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

app.post("/", async (req: Request, res: Response) => {
  try {
    const createdUser = await user.create(req.body);
    res.json(createdUser);
  } catch (error) {
    res.status(500).json(error);
  }
});
app.get("/", async (req: Request, res: Response) => {
  try {
    const allUsers = await user.findAll();
    res.json(allUsers);
  } catch (error) {
    res.status(500).json(error);
  }
});
