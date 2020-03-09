import { QueryParams } from "../../types";
import { Event, EventData } from "./types";
import EventModel from "./models";
import { validateEvent, validateEventData } from "./validations";
export async function index(queryParams: QueryParams = {}) {
	return EventModel.getMany(queryParams);
}

export async function get(id: string) {
	return EventModel.getOne(id);
}

export async function create(eventData: EventData) {
	const { error } = validateEventData(eventData);
	if (!!error) {
		throw error;
	}
	return EventModel.create(eventData);
}

export async function save(event: Event) {
	const { error } = validateEvent(event);
	if (!!error) {
		throw error;
	}
	return EventModel.save(event);
}

export async function insert(eventData: EventData) {
	const { value, error } = validateEventData(eventData);
	if (!!error) {
		throw error;
	}
	return EventModel.insert(value);
}

export default {
	index,
	get,
	create,
	insert,
	save,
};
