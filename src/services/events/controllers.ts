import { EventData } from "./types";
import Event from "./models";

export async function index(query: any) {
	return Event.getMany(query);
}

export async function get(id: string) {
	return Event.getOne(id);
}

export async function create(eventData: EventData) {
	return Event.create(eventData);
}

export default {
	index,
	get,
	create,
};
