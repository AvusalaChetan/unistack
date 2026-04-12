import dotenv from 'dotenv';
dotenv.config();
import express, { type Request, type Response } from "express";
import './config/db'; // connect to the database


const app = express();
const PORT = Number(process.env.PORT) || 3000;

app.use(express.json());



app.get("/health", (_req: Request, res: Response) => {
  res.status(200).json({message: "Server is running", ok: true});
});

app.use((req: Request, res: Response) => {
  res.status(404).json({message: "Route not found"});
});


app.listen(PORT, () => {
  console.log(`API listening on http://localhost:${PORT}`);
});
