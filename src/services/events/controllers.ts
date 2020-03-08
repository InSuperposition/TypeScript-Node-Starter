import { QueryParams } from "../../types";
import { Event, EventData } from "./types";
import EventModel from "./models";

export async function index(queryParams: QueryParams = {}) {
	return EventModel.getMany(queryParams);
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

export async function insert(eventData: EventData) {
	return EventModel.insert(eventData);
}

export default {
	index,
	get,
	create,
	insert,
	save,
};
