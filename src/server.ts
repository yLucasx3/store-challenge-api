import dotenv from "dotenv";
dotenv.config();

import { app } from "./app";
import { MongoProvider } from "./providers/MongoProvider";

const { MONGODB_URI } = process.env;

MongoProvider.connect(MONGODB_URI as string, "store")
  .then((response) => {
    console.log(response);
    app.listen(3333, () => console.log("Application is running!"));
  })
  .catch((error) => console.log(error));
