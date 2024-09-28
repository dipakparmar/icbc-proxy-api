import { authMiddleware } from "@/middlewares/auth";
import availableAppointmentsRoute from "./availableAppointments";
import express from "express";
import loginRoute from "./login";
import nearestPositionsRoute from "./nearestPositions";

/**
 * Express router instance for handling all routes.
 */
const router = express.Router();

/**
 * Route for user login.
 */
router.use("/login", loginRoute);

/**
 * Route for fetching nearest positions. Requires authentication.
 */
router.use("/nearest-positions", authMiddleware, nearestPositionsRoute);

/**
 * Route for fetching available appointments. Requires authentication.
 */
router.use(
  "/available-appointments",
  authMiddleware,
  availableAppointmentsRoute
);

/**
 * Default route handler for the root path.
 * @param {express.Request} req - The express request object.
 * @param {express.Response} res - The express response object.
 */
router.all("/", (req, res) => {
  res.send("ICBC RoadTest Booking proxy server running");
});

/**
 * Catch-all route handler for invalid endpoints.
 * @param {express.Request} req - The express request object.
 * @param {express.Response} res - The express response object.
 */
router.get("*", (req, res) => {
  res.status(404).send("Invalid endpoint");
});

export default router;
