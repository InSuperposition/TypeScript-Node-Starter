import { UserCredentials } from "./types";
import { Authenticated } from "./models";
export function login({ email, password }: UserCredentials) {
	return "token";
}
