import type {Request, Response, NextFunction} from "express";

type AsyncHandlerResult = void | Response;

const TryCatch =
  (
    passedFn: (
      req: Request,
      res: Response,
      next: NextFunction,
    ) => Promise<AsyncHandlerResult>,
  ) =>
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      await passedFn(req, res, next);
    } catch (error) {
      res.status(500).json({message: (error as Error).message});
    }
  };

export default TryCatch;
