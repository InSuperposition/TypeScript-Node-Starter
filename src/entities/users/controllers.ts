import { User, UserData } from "./types";
import { Users } from "./models";
export function createUser(
	{ email, phoneNumber, password }: UserData,
	now: number = Date.now(),
): User {
	return {
		id: "1234",
		created: now,
		email,
		phoneNumber,
	};
}

export async function readUsers() {
	return Users;
}
