import { AvailableAppointmentsRequest, LoginRequest, NearestPositionsRequest } from "@/types";
import { NextFunction, Request, Response } from "express";

/**
 * Higher-order function that creates a middleware for validating request bodies.
 * @template T The expected type of the request body
 * @param {(body: any) => body is T} validator The validation function
 * @returns {(req: Request, res: Response, next: NextFunction) => void} Express middleware function
 */
export function validateRequestBody<T>(validator: (body: any) => body is T) {
  return (req: Request, res: Response, next: NextFunction) => {
    if (validator(req.body)) {
      next();
    } else {
      res.status(400).send({ error: "Invalid request body" });
    }
  };
}

/**
 * Type guard function to check if the given body is a valid LoginRequest.
 * @param {any} body The request body to validate
 * @returns {body is LoginRequest} True if the body is a valid LoginRequest, false otherwise
 */
export const isLoginRequest = (body: any): body is LoginRequest => {
  return (
    typeof body.drvrLastName === "string" &&
    typeof body.licenceNumber === "string" &&
    typeof body.keyword === "string"
  );
};

/**
 * Type guard function to check if the given body is a valid NearestPositionsRequest.
 * @param {any} body The request body to validate
 * @returns {body is NearestPositionsRequest} True if the body is a valid NearestPositionsRequest, false otherwise
 */
export const isNearestPositionsRequest = (
  body: any
): body is NearestPositionsRequest => {
  return (
    typeof body.lng === "number" &&
    typeof body.lat === "number" &&
    typeof body.examType === "string" &&
    typeof body.startDate === "string"
  );
};

/**
 * Type guard function to check if the given body is a valid AvailableAppointmentsRequest.
 * @param {any} body The request body to validate
 * @returns {body is AvailableAppointmentsRequest} True if the body is a valid AvailableAppointmentsRequest, false otherwise
 */
export const isAvailableAppointmentsRequest = (
  body: any
): body is AvailableAppointmentsRequest => {
  return (
    typeof body.aPosID === "number" &&
    typeof body.examType === "string" &&
    typeof body.examDate === "string" &&
    typeof body.ignoreReserveTime === "boolean" &&
    typeof body.prfDaysOfWeek === "string" &&
    typeof body.prfPartsOfDay === "string" &&
    typeof body.lastName === "string" &&
    typeof body.licenseNumber === "string"
  );
};
