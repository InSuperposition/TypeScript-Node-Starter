import { Request, Response, Router } from "express";
import { BAD_REQUEST, OK } from "http-status-codes";
import { AUTHENTICATION_LOGIN_PATH } from "./constants";
import { login } from "./controllers";
const router = Router();

async function handleLogin(req: Request, res: Response) {
	try {
		const { email, password, ...restBody } = req.body;

		const credentials = { email, password };

		const userData = { ...restBody, email };

		const response = login(credentials, userData);

		return res.status(OK).json(response);
	} catch (err) {
		return res.status(BAD_REQUEST).json({
			error: err.message,
		});
	}
}

router.post(AUTHENTICATION_LOGIN_PATH, handleLogin);

export default router;
