import { Request, Response, Router } from "express";
import { BAD_REQUEST, OK } from "http-status-codes";
import {
	AUTHENTICATION_LOGIN_PATH,
	AUTHENTICATION_CREDENTIALS_PATH,
} from "./constants";
import { login, index } from "./controllers";

const router = Router();

async function handleLogin(req: Request, res: Response) {
	try {
		const { email, password, ...restUser } = req.body;
		// FIXME: add data validation

		// TODO: implement authentication middleware

		const userData = { ...restUser, email };
		const credentials = { email, password };
		const token = await login(credentials, userData);

		return res
			.set("x-authetication-token", token)
			.status(OK)
			.json({ meta: {} });
	} catch (err) {
		return res.status(BAD_REQUEST).json({
			error: err.message,
		});
	}
}

async function handleIndex(req: Request, res: Response) {
	try {
		const credentials = await index();
		return res.status(OK).json(credentials);
	} catch (err) {
		return res.status(BAD_REQUEST).json({
			error: err.message,
		});
	}
}

router.post(AUTHENTICATION_LOGIN_PATH, handleLogin);
router.get(AUTHENTICATION_CREDENTIALS_PATH, handleIndex);

export default router;
