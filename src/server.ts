/**
 * @file server.ts
 * @description Main server file for the ICBC Appointment Slot Finder/Notifier.
 */

import cors from "cors";
import express from "express";
import fs from "fs";
import { loggingMiddleware } from "./middlewares/logging";
import morgan from "morgan";
import path from "path";
import routes from "./routes";

const packageJson = require("../package.json");

/**
 * Express application instance.
 */
const app = express();

/**
 * Port number on which the server will run.
 */
const port = 3000;

// Enable CORS and JSON parsing
app.use(cors());
app.use(express.json());

/**
 * Ensure the logs directory exists.
 */
const logsDir = path.join(__dirname, "../logs");
if (!fs.existsSync(logsDir)) {
  fs.mkdirSync(logsDir);
}

/**
 * Setup request logging.
 */
const accessLogStream = fs.createWriteStream(path.join(logsDir, "access.log"), {
  flags: "a",
});

// Use Morgan for logging
app.use(morgan("combined", { stream: accessLogStream }));

/**
 * Use development-specific logging in non-production environments.
 */
if (process.env.NODE_ENV !== "production") {
  app.use(morgan("dev"));
}

// Apply custom logging middleware
app.use(loggingMiddleware);

// Apply routes
app.use("/", routes);

/**
 * Start the server and listen on the specified port.
 */
app.listen(port, () => {
  console.log(
    `${packageJson.name}@v${packageJson.version} is running at http://localhost:${port}`
  );
});
