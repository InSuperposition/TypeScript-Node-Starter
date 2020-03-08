import { CredentialsRow, UserCredentials } from "./types";
export let credentials: Array<CredentialsRow> = [];

import { v4 } from "uuid";

export async function create(userCredentials: UserCredentials) {
	const credential = {
		...userCredentials,
		id: v4(),
		created: Date.now(),
		// mock up token, use middleware to handle
		token: v4(),
	};
	return credential;
}

export async function save(credential: CredentialsRow) {
	credentials = [...credentials, credential];
	return credential;
}

export async function insert(userCredentials: UserCredentials) {
	const credential = await create(userCredentials);
	return save(credential);
}

export async function getMany(query: any) {
	return credentials;
}

export async function getByEmail(email: string) {
	const credential = credentials.find(c => c.email === email);
	return credential;
}

export default { getMany, getByEmail, create, save, insert };
