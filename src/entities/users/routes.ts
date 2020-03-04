import { Request, Response, Router } from "express";
import { BAD_REQUEST, OK } from "http-status-codes";
import { readUsers } from "./controllers";

const router = Router();

async function handleReadUsers(req: Request, res: Response) {
	try {
		const users = await readUsers();
		return res.status(OK).json(users);
	} catch (err) {
		return res.status(BAD_REQUEST).json({
			error: err.message,
		});
	}
}

router.get("/", handleReadUsers);

export default router;
