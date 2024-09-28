import axios, { AxiosError } from "axios";

import type { AppointmentSlot } from "@/types";
import { CONSTANTS } from "@/config";
import express from "express";
import { getDynamicHeaders } from "@/utils/header";
import { handleError } from "@/utils/error";
import { isAvailableAppointmentsRequest } from "../utils/validation";
import { validateRequestBody } from "@/utils/validation";

const router = express.Router();

/**
 * Router for handling available appointments requests.
 * @module availableAppointments
 */

/**
 * POST route to get available appointments.
 * @route POST /
 * @param {express.Request} req - Express request object.
 * @param {express.Response} res - Express response object.
 * @returns {Promise<void>}
 */
router.post(
  "/",
  validateRequestBody(isAvailableAppointmentsRequest),
  async (req: express.Request, res: express.Response) => {
    try {
      /**
       * Make a POST request to get available appointments.
       * @type {AxiosResponse}
       */
      const response = await axios.post(
        `${CONSTANTS.BASE_URL}/deas-api/v1/web/getAvailableAppointments`,
        req.body,
        {
          headers: getDynamicHeaders(req),
        }
      );
      
      /**
       * Send the response data as an array of AppointmentSlot.
       * @type {AppointmentSlot[]}
       */
      res.send(response.data as AppointmentSlot[]);
    } catch (error) {
      /**
       * Handle any errors that occur during the request.
       */
      handleError(error as AxiosError, res);
    }
  }
);

export default router;
