import { User, UserData } from "./types";
import UserModel from "./models";

export async function index(query: any = {}) {
	return UserModel.getMany(query);
}

export async function get(id: string) {
	return UserModel.getOne(id);
}

export async function create(userData: UserData) {
	return UserModel.create(userData);
}

export async function save(user: User) {
	return UserModel.save(user);
}

export async function getByEmail(email: string) {
	return UserModel.getByEmail(email);
}

export default {
	index,
	get,
	create,
	getByEmail,
	save,
};
