/**
 * @file login.test.ts
 * @description Test suite for the login endpoint.
 */

import { LoginRequest, LoginSuccessResponse } from "@/types";
import axios, { AxiosError } from "axios";

/** Base URL for the API endpoints */
const BASE_URL = "http://localhost:3000"; // Adjust this if your proxy server runs on a different port

// Update the loginData object with your own ICBC login credentials
const loginData: LoginRequest = {
  drvrLastName: process.env.DRIVER_LAST_NAME || "",
  licenceNumber: process.env.LICENCE_NUMBER || "",
  keyword: process.env.KEYWORD || "",
};

/**
 * @description Test suite for the Login Endpoint
 */
describe("Login Endpoint", () => {
  /**
   * @description Test case for successful login
   * @async
   */
  it("should successfully login and return a token", async () => {
    const response = await axios.post<LoginSuccessResponse>(
      `${BASE_URL}/login`,
      loginData
    );

    expect(response.status).toBe(200);
    expect(response.data.success).toBe(true);
    expect(response.data.token).toBeDefined();
    expect(typeof response.data.token).toBe("string");
    expect(response.data.token.length).toBeGreaterThan(0);
  });

  /**
   * @description Test case for invalid login credentials
   * @async
   */
  // it('should return an error for invalid login credentials', async () => {
  //   const invalidLoginData: LoginRequest = {
  //     drvrLastName: 'INVALID',
  //     licenceNumber: '00000000',
  //     keyword: 'WrongKeyword'
  //   };

  //   await expect(axios.post<LoginErrorResponse>(`${BASE_URL}/login`, invalidLoginData))
  //     .rejects.toThrow();

  //   try {
  //     await axios.post<LoginErrorResponse>(`${BASE_URL}/login`, invalidLoginData);
  //   } catch (error) {
  //     const axiosError = error as AxiosError<LoginErrorResponse>;
  //     expect(axiosError.response?.status).toBe(401);
  //     expect(axiosError.response?.data.success).toBe(false);
  //     expect(axiosError.response?.data.message).toBeDefined();
  //   }
  // });

  /**
   * @description Test case for invalid request body
   * @async
   */
  // it('should return a 400 error for invalid request body', async () => {
  //   const invalidRequestBody = {
  //     invalidField: 'This is not a valid login request'
  //   };

  //   await expect(axios.post<InvalidRequestResponse>(`${BASE_URL}/login`, invalidRequestBody))
  //     .rejects.toThrow();

  //   try {
  //     await axios.post<InvalidRequestResponse>(`${BASE_URL}/login`, invalidRequestBody);
  //   } catch (error) {
  //     const axiosError = error as AxiosError<InvalidRequestResponse>;
  //     expect(axiosError.response?.status).toBe(400);
  //     expect(axiosError.response?.data.error).toBe('Invalid request body');
  //   }
  // });
});
