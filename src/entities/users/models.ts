import { User, UserData } from "./types";
import { v4 } from "uuid";

let users: Array<User> = [];

export async function create(userData: UserData) {
	const user = {
		...userData,
		id: v4(),
		created: Date.now(),
	};
	return user;
}

export async function save(user: User) {
	users = [...users, user];
	return users;
}

export async function insert(userData: UserData) {
	const user = await create(userData);
	return save(user);
}

export async function getMany(query: any) {
	return users;
}

export async function getOne(id: string) {
	const user = users.find(usr => usr.id === id);
	return user;
}

export async function getByEmail(email: string) {
	const user = users.find(usr => usr.email === email);
	return user;
}

export default { getMany, getOne, getByEmail, insert, create, save };
