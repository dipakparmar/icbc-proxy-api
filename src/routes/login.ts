import axios, { AxiosError } from "axios";
import { generateHashedParam, storeToken } from "@/utils/auth";

import { CONSTANTS } from "@/config";
import { defaultHeaders } from "@/utils/header";
import express from "express";
import { handleError } from "@/utils/error";
import { isLoginRequest } from "@/utils/validation";
import { validateRequestBody } from "@/utils/validation";

const router = express.Router();

/**
 * @route POST /login
 * @description Handle user login
 * @access Public
 */
router.post(
  "/",
  validateRequestBody(isLoginRequest),
  /**
   * @param {express.Request} req - Express request object
   * @param {express.Response} res - Express response object
   */
  async (req: express.Request, res: express.Response) => {
    try {
      const data = JSON.stringify({
        drvrLastName: req.body.drvrLastName,
        licenceNumber: req.body.licenceNumber,
        keyword: req.body.keyword,
      });

      /**
       * @type {import('axios').AxiosRequestConfig}
       */
      const config = {
        method: "put",
        maxBodyLength: Infinity,
        url: `${CONSTANTS.BASE_URL}/deas-api/v1/webLogin/webLogin`,
        headers: {
          ...defaultHeaders,
          Origin: CONSTANTS.BASE_URL,
          Referer: `${CONSTANTS.BASE_URL}/webdeas-ui/login;type=driver`,
        },
        data: data,
      };

      const response = await axios(config);

      const rawAuthToken = response.headers["authorization"];
      let authToken: string | null = null;
      authToken = rawAuthToken ? rawAuthToken : null;

      if (authToken) {
        authToken = authToken.replace("Bearer ", "");
        storeToken(authToken);
        const hashedParam = generateHashedParam(authToken);
        res.send({
          success: true,
          token: authToken,
          hashedParam,
          data: response.data,
        });
      } else {
        res.status(401).send({
          success: false,
          message: "No authorization token received from the server",
        });
      }
    } catch (error) {
      handleError(error as AxiosError, res);
    }
  }
);

export default router;
