import { DefaultHeaders, HeaderOptions } from "@/types";

import { RawAxiosRequestHeaders } from "axios";
import { Request } from "express";

/**
 * Default headers used in requests.
 */
export const defaultHeaders: DefaultHeaders = {
  accept: "application/json, text/plain, */*",
  "accept-language": "en-US,en;q=0.9",
  "cache-control": "no-cache",
  "content-type": "application/json",
  pragma: "no-cache",
  "Sec-Fetch-Dest": "empty",
  "Sec-Fetch-Mode": "cors",
  "Sec-Fetch-Site": "same-origin",
  "User-Agent":
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0.0.0 Safari/537.36",
  "sec-ch-ua": '"Chromium";v="129", "Not=A?Brand";v="8"',
  "sec-ch-ua-mobile": "?0",
  "sec-ch-ua-platform": '"macOS"',
};

/**
 * Generates a set of headers based on the incoming request and provided options.
 * 
 * @param req - The incoming Express request
 * @param options - Options for customizing header generation
 * @returns A set of headers for use in outgoing requests
 */
export const getDynamicHeaders = (
  req: Request,
  options: HeaderOptions = {}
): RawAxiosRequestHeaders => {
  const {
    skipHeaders = [],
    additionalHeaders = {},
    useDefaultHeaders = true,
  } = options;

  let headers: RawAxiosRequestHeaders = {};

  if (useDefaultHeaders) {
    headers = { ...defaultHeaders };
  }

  ["authorization", "cookie"].forEach((header) => {
    if (!skipHeaders.includes(header) && req.headers[header]) {
      headers[header] = req.headers[header] as string;
    }
  });

  skipHeaders.forEach((header) => {
    delete headers[header];
  });

  headers = { ...headers, ...additionalHeaders };

  return headers;
};
