import { QueryParams } from "../../types";
import { User, UserData } from "./types";
import UserModel from "./models";
import { validateUser, validateUserData } from "./validations";
export async function index(queryParams: QueryParams = {}) {
	return UserModel.getMany(queryParams);
}

export async function get(id: string) {
	return UserModel.getOne(id);
}

export async function create(userData: UserData) {
	const { error } = validateUserData(userData);
	if (!!error) {
		throw error;
	}
	return UserModel.create(userData);
}

export async function save(user: User) {
	const { error } = validateUser(user);
	if (!!error) {
		throw error;
	}
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
