import { UserData } from "./types";
import User from "./models";

export async function index(query: any) {
	return User.getMany(query);
}

export async function get(id: string) {
	return User.getOne(id);
}

export async function create(userData: UserData) {
	return User.insert(userData);
}

export async function getByEmail(email: string) {
	return User.getByEmail(email);
}

export default {
	index,
	get,
	create,
	getByEmail,
};
