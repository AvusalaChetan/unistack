import type {Request, Response} from "express";
import TryCatch from "../lib/helper/trycatch";
import Institute from "../models/instiuteModel";
import {RequestModel} from "../models/requestModel";
import User from "../models/userModel";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

type BodyTypes = {
  name: string;
  email: string;
  role: string;
  instituteCode: string;
  password: string;
};

const userExist = async (email: string, res: Response) => {
  const userExistInReq = await RequestModel.findOne({email}).select("status");
  console.log(userExistInReq);

  const userExist = await User.findOne({email});
  if (userExistInReq) {
    return res
      .status(400)
      .json({message: `user with this email ${email} is exist. `});
  }

  if (userExist) {
    return res
      .status(400)
      .json({message: `user with this email ${email}  exist `});
  }
};

const InstituteExist = async (instituteCode: string, res: Response) => {
  const instituteExist = await Institute.findOne({instituteCode});

  if (!instituteExist) {
    return res.status(400).json({
      message: `instiute with this  ${instituteCode} instituteCode does not exist. `,
    });
  }
};

export const signup = TryCatch(async (req: Request, res: Response) => {
  const {name, email, role, password, instituteCode}: BodyTypes = req.body;
  userExist(email, res);
  InstituteExist(instituteCode, res);

  // it is created to find institute id
  const institute = await Institute.findOne({
    instituteCode: instituteCode.toUpperCase().trim(),
  });

  const newUser = await RequestModel.create({
    name,
    email,
    role,
    status: "pending",
    instituteCode: instituteCode.toUpperCase().trim(),
    institute: institute?._id,
    password,
  });

  res.status(200).json({
    success: true,
    message: `your request has been submitted successfully. please wait for the admin to review your request and accept it. `,
  });
});

// i choose path 1 : what i understad is user signup go in reqModel . to check stauts user login backend check user in UserModel if yes go dashboard full control based on roal ,
// if not backend send a payload {
//   "success": false,
//   "accountStatus": "pending",
//   "message": "Your application was submitted on 2026-05-21 and is currently awaiting admin review."
// } with stause of 403 forbidden to fronted , in frontend i should i should crete a page about there deails and show stauts

export const login = TryCatch(async (req: Request, res: Response) => {
  const {email, password} = req.body;
  const existingUser = await User.findOne({email}).select("+password");

  if (!existingUser) {
    const requestUser = await RequestModel.findOne({email}).select("-password");

    if (!requestUser) {
      return res.status(400).json({message: "Invalid email or password"});
    }
    return res.status(403).json({
      success: false,
      accountStatus: requestUser.status,
      user: requestUser,
      message: `Your application was submitted on ${requestUser.createdAt.toDateString()} and is currently awaiting admin review.`,
    });
  }

  const isMatch = await bcrypt.compare(password, existingUser.password);
  if (!isMatch) {
    return res.status(400).json({message: "Invalid email or password"});
  }

  if (!process.env.JWT_SECRET) {
    return res
      .status(500)
      .json({message: "Internal server error ---- JWT secret is not defined"});
  }

  const token = jwt.sign(
    {userId: existingUser._id, role: existingUser.role},
    process.env.JWT_SECRET as string,
    {expiresIn: "3h"},
  );

  res.cookie("token", token, {
    httpOnly: true,
    secure: true,
    maxAge: 3 * 60 * 60 * 1000,
  });
  
  res.status(200).json({
    success: true,
    token,
    // user: existingUser,
  });
});

export const logout = TryCatch(async (req: Request, res: Response) => {
  res.clearCookie("token", {
    sameSite: "none",
    httpOnly: true,
    secure: true,
  });
  res.status(200).json({message: "Logged out successfully"});
});
