import { Request, Response, Router } from "express";
import { BAD_REQUEST, OK } from "http-status-codes";
import { USER_EVENTS_INDEX_PATH, USER_EVENTS_GET_ONE_PATH } from "./constants";
import { index, get } from "./controllers";

const router = Router();

async function handleIndexUserEvents(req: Request, res: Response) {
	try {
		const events = await index(req.query);
		return res.status(OK).json(events);
	} catch (err) {
		return res.status(BAD_REQUEST).json({
			error: err.message,
		});
	}
}

async function handleGetUserEvent(req: Request, res: Response) {
	try {
		const events = await get(req.params.id);
		return res.status(OK).json(events);
	} catch (err) {
		return res.status(BAD_REQUEST).json({
			error: err.message,
		});
	}
}

router.get(USER_EVENTS_INDEX_PATH, handleIndexUserEvents);
router.get(USER_EVENTS_GET_ONE_PATH, handleGetUserEvent);
export default router;
