import express, { Request, Response } from "express";
const sequelize = require("./model/domain/db");
import { User } from "./model/domain/entities/users";
//const User = require("./model/domain/entities/users");

const app = express();

//app.use('/api', router);
app.use(express.json());

const port = 3000;

app.post("/", async (req: Request, res: Response) => {
  try {
    // const { login, passwordEncrypted } = req.body;
    // const user = await User.create({ login, passwordEncrypted });
    const user = await User.create(req.body);
    res.json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    app.listen(port, () => {
      console.log(`server is listening on ${port}`);
    });
  } catch (err) {
    console.log(err);
  }
};

start();
