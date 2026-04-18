import {v2 as cloudinary} from "cloudinary";
import dotenv from "dotenv";
dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME?.trim().toLowerCase(),
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
});

type UploadFile = {
  path?: string;
  buffer?: Buffer;
};

type UploadResult = Awaited<ReturnType<typeof cloudinary.uploader.upload>>;

const uploadInCloudnary = async (
  file: UploadFile,
  folder: string,
): Promise<UploadResult> => {
  if (file.buffer) {
    const result = await new Promise<UploadResult>((resolve, reject) => {
      cloudinary.uploader
        .upload_stream({folder}, (error, uploadResult) => {
          if (error || !uploadResult) {
            reject(error ?? new Error("Cloudinary upload failed"));
            return;
          }
          resolve(uploadResult as UploadResult);
        })
        .end(file.buffer);
    });

    return result;
  }

  if (file.path) {
    const result = await cloudinary.uploader.upload(file.path, {folder});
    return result;
  }

  throw new Error("Invalid file input: expected buffer or path");
};

export default uploadInCloudnary;
