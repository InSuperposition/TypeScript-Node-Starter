import { UserCredentials } from "./types";
import { UserData } from "../../entities/users/types";
import { AUTHENTICATION_LOGIN_EVENT } from "./constants";
import { createUser } from "../../entities/users/controllers";
import { createEvent } from "../events/controllers";
import { Authenticated } from "./models";
export function login(
	{ email, password }: UserCredentials,
	userData: UserData,
) {
	const now = Date.now();
	//TODO: query Authenticated
	// - email exists
	// - password matches

	const user = createUser(userData, now);

	// Events
	const event = createEvent(AUTHENTICATION_LOGIN_EVENT, now);

	return { token: "token", user };
}
