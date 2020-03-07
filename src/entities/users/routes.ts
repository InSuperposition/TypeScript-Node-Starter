import { Request, Response, Router } from "express";
import { BAD_REQUEST, OK } from "http-status-codes";
import { USERS_BASE_PATH } from "./constants";
import { index } from "./controllers";

const router = Router();

async function handleReadUsers(req: Request, res: Response) {
	try {
		const users = await index("test");
		return res.status(OK).json(users);
	} catch (err) {
		return res.status(BAD_REQUEST).json({
			error: err.message,
		});
	}
}

router.get(USERS_BASE_PATH, handleReadUsers);

export default router;
