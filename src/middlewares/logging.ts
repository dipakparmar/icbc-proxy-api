import { NextFunction, Request, Response } from "express";

/**
 * Middleware for logging request details.
 * 
 * This middleware logs the request body for POST and PUT requests.
 * It's useful for debugging and monitoring incoming data.
 *
 * @param {Request} req - The Express request object.
 * @param {Response} res - The Express response object.
 * @param {NextFunction} next - The next middleware function in the request-response cycle.
 * 
 * @example
 * // Usage in Express app
 * app.use(loggingMiddleware);
 */
export const loggingMiddleware = (req: Request, res: Response, next: NextFunction) => {
  if (req.method === "POST" || req.method === "PUT") {
    console.log("Request Body:", JSON.stringify(req.body, null, 2));
  }
  next();
};
