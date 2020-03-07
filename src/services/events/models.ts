import { Event, EventData } from "./types";
import { v4 } from "uuid";

export let events: Array<Event> = [];
export async function create(eventData: EventData) {
	const event = {
		...eventData,
		id: v4(),
		created: Date.now(),
	};

	events = [...events, event];
	return event;
}

export async function read() {
	return events;
}

export default { create, read };
