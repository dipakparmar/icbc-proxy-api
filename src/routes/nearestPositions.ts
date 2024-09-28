import axios, { AxiosError } from "axios";

import { CONSTANTS } from '@/config';
import express from "express";
import { getDynamicHeaders } from "@/utils/header";
import { handleError } from "@/utils/error";
import { isNearestPositionsRequest } from "@/utils/validation";
import { validateRequestBody } from "@/utils/validation";

const router = express.Router();

/**
 * Router for handling nearest positions requests.
 * @module nearestPositions
 */

/**
 * POST route for retrieving nearest positions.
 * @route POST /
 * @param {express.Request} req - Express request object.
 * @param {express.Response} res - Express response object.
 * @returns {Promise<void>}
 */
router.post(
  "/",
  validateRequestBody(isNearestPositionsRequest),
  async (req: express.Request, res: express.Response) => {
    try {
      /**
       * Send a PUT request to the ICBC API to get nearest positions.
       * @type {import('axios').AxiosResponse}
       */
      const response = await axios.put(
        `${CONSTANTS.BASE_URL}/deas-api/v1/web/getNearestPos`,
        req.body,
        {
          headers: getDynamicHeaders(req),
        }
      );
      res.send(response.data);
    } catch (error) {
      handleError(error as AxiosError, res);
    }
  }
);

export default router;
