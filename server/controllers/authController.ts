import TryCatch from "../lib/trycatch";
import type {Request, Response} from "express";

export const signup = TryCatch(async (req: Request, res: Response) => {});
export const signin = TryCatch(async (req: Request, res: Response) => {});
export const logout = TryCatch(async (req: Request, res: Response) => {
  res.json({message: "l;sdkjf;aslj"});
});
