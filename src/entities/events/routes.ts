import { Request, Response, Router } from "express";
import { BAD_REQUEST, OK } from "http-status-codes";
import { readEvents } from "./controllers";

const router = Router();

async function handleReadEvents(req: Request, res: Response) {
	try {
		const events = await readEvents();
		return res.status(OK).json(events);
	} catch (err) {
		return res.status(BAD_REQUEST).json({
			error: err.message,
		});
	}
}

router.get("/", handleReadEvents);

export default router;
