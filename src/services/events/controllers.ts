import { EventData } from "./types";
import Event from "./models";

export async function createEvent(eventData: EventData) {
	return Event.create(eventData);
}

export async function readEvent() {
	return Event.read();
}
