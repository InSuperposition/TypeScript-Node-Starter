import { Event, EventData } from "./types";
import EventModel from "./models";

export async function index(query: any = {}) {
	return EventModel.getMany(query);
}

export async function get(id: string) {
	return EventModel.getOne(id);
}

export async function create(eventData: EventData) {
	return EventModel.create(eventData);
}

export async function save(event: Event) {
	return EventModel.save(event);
}

export default {
	index,
	get,
	create,
};
