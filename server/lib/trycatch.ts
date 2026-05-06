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
      const err = error as Error;
      console.error("Error in route handler:", err.message, err.stack);
      res
        .status(500)
        .json({
          message: err.message,
          error: process.env.NODE_ENV === "development" ? err.stack : undefined,
        });
    }
  };

export default TryCatch;
