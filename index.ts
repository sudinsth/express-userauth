import express, { Request, Response } from "express";
import "./models/db";

import User from "./models/user";

const app = express();
const port = 3000;

app.post("/create-user", async (req: Request, res: Response) => {
  const user = await User.create({
    fullname: "John Doe",
    email: "john@email.com",
    password: "1234",
  });
  res.json(user);
});

app.get("/", (req: any, res: any) => {
  res.send("Hello World");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
