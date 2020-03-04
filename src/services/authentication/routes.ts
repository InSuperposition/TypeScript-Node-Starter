import { Request, Response, Router } from "express";
import { BAD_REQUEST, OK } from "http-status-codes";
import {
	AUTHENTICATION_LOGIN_EVENT,
	AUTHENTICATION_LOGIN_URL,
} from "./constants";
import { createUser } from "../../entities/users/controllers";
import { createEvent } from "../../entities/events/controllers";
const router = Router();

async function handleLogin(req: Request, res: Response) {
	try {
		const now = Date.now();
		const userData = req.body;
		const user = await createUser(userData, now);
		const event = await createEvent(AUTHENTICATION_LOGIN_EVENT, now);

		return res.status(OK).json({ user, event });
	} catch (err) {
		return res.status(BAD_REQUEST).json({
			error: err.message,
		});
	}
}

router.post(AUTHENTICATION_LOGIN_URL, handleLogin);

export default router;
