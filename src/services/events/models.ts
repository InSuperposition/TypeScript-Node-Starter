import { isToday } from "date-fns";
import { Event, EventData } from "./types";
import { v4 } from "uuid";

export let events: Array<Event> = [
	{
		type: "LOGIN",
		email: "test@test.com",
		password: "salt",
		userId: "user-id-1",
		id: "epoch-event-id-1",
		created: 0,
	},
];
export async function create(eventData: EventData) {
	const event = {
		...eventData,
		id: v4(),
		created: Date.now(),
	};

	events = [...events, event];
	return event;
}

export async function getMany(query: any) {
	return events.filter(evt => {
		return query.today === "true" ? isToday(evt.created) : true;
	});
}

export async function getOne(id: string) {
	const event = events.find(evt => {
		return evt.userId === id;
	});
	return event;
}

export default { create, getMany, getOne };
