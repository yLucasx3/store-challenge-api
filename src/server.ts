import dotenv from "dotenv";
dotenv.config();

import { app } from "./app";

app.listen(process.env.PORT || 3333, () =>
  console.log("Application is running!")
);
