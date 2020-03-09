import { QueryParams } from "../../types";
import { CredentialsRow, UserCredential } from "./types";
import { UserData, User as UserRow } from "../../entities/users/types";
import { AUTHENTICATION_LOGIN_EVENT_NAME } from "./constants";
import Credential from "./models";
import User from "../../entities/users/models";
import Event from "../events/controllers";
// import { validateUserCredential, validateCredentialsRow } from "./validations";
// mock transaction for creating a authenticated user
export async function transact(credential: CredentialsRow, user: UserRow) {
	// const { error } = validateCredentialsRow(credential);
	// if (!!error) {
	// 	throw error;
	// }
	try {
		await Credential.save(credential);
		await User.save(user);
	} catch (err) {
		throw err;
	} finally {
		// TODO: commit transaction
		return credential.token;
	}
}

export async function index(queryParams: QueryParams = {}) {
	return Credential.getMany(queryParams);
}

export async function login(
	userCredential: UserCredential,
	userData: UserData,
) {
	// const { error } = validateUserCredential(userCredential);
	// if (!!error) {
	// 	throw error;
	// }
	try {
		let credential = await Credential.getByEmail(userCredential.email);

		// confirm if email is valid (exists in User table)
		let user = await User.getByEmail(userCredential.email);

		// NS8-assessment requirement:
		// could be a transaction, if this was an actual use case
		// FIXME: currently creates user and credentials if one does not exist
		const userUndefined = !user;
		if (userUndefined) {
			user = await User.create(userData);
		}

		const credentialUndefined = !credential;
		if (credentialUndefined) {
			credential = await Credential.create(userCredential, user.id);
		}

		// confirm password
		if (credential.password !== userCredential.password) {
			throw new Error("Incorrect password");
		}

		const token =
			userUndefined && credentialUndefined
				? await transact(credential, user)
				: credential.token;

		// emit "LOGIN" event to event service
		await Event.insert({
			userId: user.id,
			type: AUTHENTICATION_LOGIN_EVENT_NAME,
		});

		return token;
	} catch (err) {
		throw err;
	}
}

export default { login, index };
