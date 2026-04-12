import type {Request, Response, NextFunction} from "express";

const TryCatch =
  (
    passedFn: (
      req: Request,
      res: Response,
      next: NextFunction,
    ) => Promise<void>,
  ) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      await passedFn(req, res, next);
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .json({message: (error as Error).message || "Internal Server Error"});
    }
  };

export default TryCatch;
