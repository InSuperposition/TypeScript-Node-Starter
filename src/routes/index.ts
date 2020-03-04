import { Router } from "express";
import AuthenticationRouter from "../services/authentication/routes";
import EventRouter from "../entities/events/routes";
import UserRouter from "../entities/users/routes";

const router = Router();

// services
router.use("/authentication", AuthenticationRouter);

// entities
router.use("/events", EventRouter);
router.use("/users", UserRouter);

export default router;
