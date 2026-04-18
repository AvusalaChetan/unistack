import type {NextFunction, Request, Response} from "express";
import TryCatch from "../lib/trycatch";
import User from "../models/userModel";
import Institute from "../models/instiuteModel";
import uploadInCloudnary from "../service/uploadToCloudnary";
import {instituteCodeGen} from "../lib/uniqueCodeGen";

export const instituteRegister = TryCatch(
  async (req: Request, res: Response, next: NextFunction) => {
    const {instituteName, instituteType, name, email, password} = req.body;
    const institute_logo = req.file;

    const existUser = await User.findOne({email});
    if (existUser)
      return res
        .status(403)
        .json({message: "User already exists with this email."});

    const existInstitute = await Institute.findOne({instituteName});

    if (existInstitute)
      return res
        .status(403)
        .json({message: "A institute exist with that name"});

    if (!institute_logo)
      return res.status(400).json({message: "Institute logo is required."});

    const instituteCode: string = instituteCodeGen(instituteName);

    const instituteLogo = await uploadInCloudnary(
      institute_logo,
      "unistack/institutes/logos",
    );

    const admin = await User.create({
      name,
      email,
      role: "admin",
      instituteCode,
      password,
    });

    const institute = await Institute.create({
      instituteName,
      instituteLogo: instituteLogo.secure_url,
      instituteType,
      instituteCode,
      admin: admin._id,
    });

    admin.institute = institute._id;
    await admin.save();

    res.json({
      message: "Institute registered successfully",
      user: admin,
      institute,
    });
  },
);
