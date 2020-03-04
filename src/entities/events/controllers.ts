import { Event, EventData } from "./types";
import { Events } from "./models";

export function createEvent(
	{ type }: EventData,
	now: number = Date.now(),
): Event {
	return {
		type,
		id: "1234",
		created: now,
	};
}

// FIXME: All users
export async function readEvents() {
	return Events;
}
