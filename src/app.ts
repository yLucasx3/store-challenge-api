import express from "express";
import cors, { CorsOptions } from "cors";
import { router } from "./routes";
const app = express();

const corsOptions: CorsOptions = {
  origin: ["https://store-challenge.vercel.app", "http://localhost:3000"],
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(router);

export { app };
