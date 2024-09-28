import { NextFunction, Request, Response } from "express";
import { generateHashedParam, getStoredToken, isTokenExpired } from "../utils/auth";

/**
 * Middleware for authenticating requests.
 * 
 * This middleware checks for the presence of an 'auth' query parameter,
 * validates it against a stored token, and ensures the token hasn't expired.
 * If authentication is successful, it adds the token to the request headers.
 * 
 * @param {Request} req - The Express request object.
 * @param {Response} res - The Express response object.
 * @param {NextFunction} next - The Express next middleware function.
 * @returns {void}
 */
export const authMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const hashedParam = req.query.auth as string;
  if (!hashedParam) {
    res.status(401).send("Unauthorized: Missing auth parameter");
    return;
  }

  const token = getStoredToken();
  if (!token) {
    res.status(401).send("Unauthorized: No token found");
    return;
  }

  if (hashedParam !== generateHashedParam(token)) {
    res.status(401).send("Unauthorized: Invalid auth parameter");
    return;
  }

  if (isTokenExpired(token)) {
    res.status(401).send("Unauthorized: Token expired");
    return;
  }

  req.headers.authorization = `Bearer ${token}`;
  next();
};
