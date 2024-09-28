import crypto from "crypto";
import fs from "fs";
import path from "path";

const TOKENS_DIR = path.join(__dirname, "../../tokens");

if (!fs.existsSync(TOKENS_DIR)) {
  fs.mkdirSync(TOKENS_DIR);
}

const TOKEN_FILE = path.join(TOKENS_DIR, "token.json");

/**
 * Stores the given token in a JSON file.
 * @param {string} token - The token to be stored.
 */
export const storeToken = (token: string): void => {
  fs.writeFileSync(TOKEN_FILE, JSON.stringify({ token }));
};

/**
 * Retrieves the stored token from the JSON file.
 * @returns {string|null} The stored token, or null if not found.
 */
export const getStoredToken = (): string | null => {
  try {
    const data = fs.readFileSync(TOKEN_FILE, "utf8");
    const { token } = JSON.parse(data);
    return token;
  } catch (error) {
    return null;
  }
};

/**
 * Parses a JWT token and returns its payload.
 * @param {string} token - The JWT token to parse.
 * @returns {any|null} The parsed payload, or null if parsing fails.
 */
export const parseJwt = (token: string): any => {
  try {
    const base64Url = token.split(".")[1];
    const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split("")
        .map((c) => {
          return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join("")
    );

    return JSON.parse(jsonPayload);
  } catch (error) {
    return null;
  }
};

/**
 * Checks if the given token is expired.
 * @param {string} token - The token to check.
 * @returns {boolean} True if the token is expired, false otherwise.
 */
export const isTokenExpired = (token: string): boolean => {
  const payload = parseJwt(token);
  if (!payload || !payload.exp) {
    return true;
  }
  const currentTime = Math.floor(Date.now() / 1000);
  return payload.exp < currentTime;
};

/**
 * Generates a hashed parameter from the given token.
 * @param {string} token - The token to hash.
 * @returns {string} A 16-character hashed string.
 */
export const generateHashedParam = (token: string): string => {
  return crypto.createHash("sha256").update(token).digest("hex").slice(0, 16);
};
