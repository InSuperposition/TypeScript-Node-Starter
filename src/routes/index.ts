import { Router } from "express";
import AuthenticationRouter from "../services/authentication/routes";
import EventRouter from "../services/events/routes";
import UserRouter from "../entities/users/routes";

const router = Router();

// service routes
router.use("/authentication", AuthenticationRouter);
router.use("/events", EventRouter);

// entity routes
router.use("/users", UserRouter);

export default router;
