import { QueryParams } from "../../types";
import { CredentialsRow, UserCredential } from "./types";
export let credentials: Array<CredentialsRow> = [];

import { v4 } from "uuid";

export async function create(userCredential: UserCredential, userId: string) {
	const credential = {
		...userCredential,
		id: v4(),
		created: Date.now(),
		// mock up token, use middleware to handle
		token: v4(),
		userId,
	};
	return credential;
}

export async function save(credential: CredentialsRow) {
	credentials = [...credentials, credential];
	return credential;
}

export async function insert(userCredential: UserCredential, userId: string) {
	const credential = await create(userCredential, userId);
	return save(credential);
}

export async function getMany(queryParams: QueryParams) {
	return credentials;
}

export async function getByEmail(email: string) {
	const credential = credentials.find(c => c.email === email);
	return credential;
}

export default { getMany, getByEmail, create, save, insert };
