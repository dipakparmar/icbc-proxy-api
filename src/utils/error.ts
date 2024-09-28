import { AxiosError } from "axios";
import { Response } from "express";

/**
 * Handles errors from Axios requests and sends appropriate responses.
 * 
 * @param {AxiosError} error - The error object from Axios.
 * @param {Response} res - The Express response object.
 * @returns {void}
 * 
 * @description
 * This function handles different types of errors that can occur during Axios requests:
 * - If there's a response from the server, it sends the response status and data.
 * - If a request was made but no response was received, it sends a 500 status with a message.
 * - For all other errors, it sends a 500 status with the error message.
 * 
 * @example
 * import { handleError } from './error';
 * 
 * try {
 *   // Make Axios request
 * } catch (error) {
 *   handleError(error, res);
 * }
 */
export const handleError = (error: AxiosError, res: Response): void => {
  if (error.response) {
    res.status(error.response.status).send(error.response.data);
  } else if (error.request) {
    res.status(500).send("No response received from the server");
  } else {
    res.status(500).send(error.message);
  }
};
