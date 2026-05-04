import type {Request, Response} from "express";
import TryCatch from "../lib/trycatch";
import {RequestModel} from "../models/requestModel";
import User from "../models/userModel";
import Institute from "../models/instiuteModel";

export const signup = TryCatch(async (req: Request, res: Response) => {});
export const signin = TryCatch(async (req: Request, res: Response) => {});
export const logout = TryCatch(async (req: Request, res: Response) => {});
