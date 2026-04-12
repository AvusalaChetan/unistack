import dotenv from 'dotenv';
import express, { type Request, type Response } from "express";
dotenv.config();
import './config/db'; // connect to the database
import morgon from 'morgan';

const app = express();
const PORT = Number(process.env.PORT) || 3000;

app.use(morgon('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get('/health', (req, res) => {
  res.status(200).json({ message: 'Server is healthy' });
});

app.use((req: Request, res: Response) => {
  res.status(404).json({message: "Route not found"});
});


app.listen(PORT, () => {
  console.log(`API listening on http://localhost:${PORT}`);
});
