import dotenv from "dotenv";
import express, {type Request, type Response} from "express";
dotenv.config();
import dbConnection from "./config/db";
import morgon from "morgan";
import cors, {type CorsOptions} from "cors";

import authRouter from "./routes/authRouters";
import instituteRouter from "./routes/instituteRoute";

const app = express();
const PORT = Number(process.env.PORT) || 3000;

if (!process.env.FRONTEND_URL) {
  console.log("frontend url is NOT present");
}

app.use(
  cors({
    origin: ["http://localhost:5173", process.env.FRONTEND_URL].filter(Boolean),
    credentials: true,
  }),
);
app.use(morgon("dev"));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use("/api/auth", authRouter);
app.use("/api/institute", instituteRouter);

app.get("/health", (req, res) => {
  console.log(" UptimeRobot Ping Received at:", new Date().toISOString());
  res.status(200).json({message: "Server is healthy"});
});

app.use((req: Request, res: Response) => {
  res.status(404).json({message: "Route not found"});
});

dbConnection.then(() => {
  app.listen(PORT, () => {
    console.log(`API listening on http://localhost:${PORT}`);
  });
});
