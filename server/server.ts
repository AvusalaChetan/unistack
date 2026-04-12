import express, {type Request, type Response} from "express";

const app = express();
const PORT = Number(process.env.PORT) || 3000;

app.use(express.json());

app.get("/", (_req: Request, res: Response) => {
  res.status(200).json({message: "Server is running"});
});

app.get("/health", (_req: Request, res: Response) => {
  res.status(200).json({ok: true});
});

app.listen(PORT, () => {
  console.log(`API listening on http://localhost:${PORT}`);
});
