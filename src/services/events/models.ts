import { isToday } from "date-fns";
import { Event, EventData } from "./types";
import { v4 } from "uuid";

export let events: Array<Event> = [];

export async function create(eventData: EventData) {
	const event = {
		...eventData,
		id: v4(),
		created: Date.now(),
	};

	return event;
}

export async function save(event: Event) {
	events = [...events, event];
	return event;
}

export async function insert(eventData: EventData) {
	const event = await create(eventData);
	return save(event);
}

export async function getMany(query: any) {
	return events.filter(evt => {
		return query.today === "true" ? isToday(evt.created) : true;
	});
}

export async function getOne(id: string) {
	const event = events.find(evt => {
		return evt.id === id;
	});
	return event;
}

export default { create, save, insert, getMany, getOne };
