import { CredentialsRow, UserCredentials } from "./types";
import { UserData, User as UserRow } from "../../entities/users/types";
import { AUTHENTICATION_LOGIN_EVENT_NAME } from "./constants";
import Credential from "./models";
import User from "../../entities/users/models";
import Event from "../events/controllers";

// mock transaction for creating a authenticated user
export async function transact(credential: CredentialsRow, user: UserRow) {
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

export async function index(query: any) {
	return Credential.getMany(query);
}

export async function login(
	userCredentials: UserCredentials,
	userData: UserData,
) {
	try {
		let credential = await Credential.getByEmail(userCredentials.email);

		// confirm if email is valid (exists in User table)
		let user = await User.getByEmail(userCredentials.email);

		// NS8-assessment requirement:
		// could be a transaction, if this was an actual use case
		// FIXME: currently creates user and credentials if one does not exist
		const userUndefined = !user;
		if (userUndefined) {
			user = await User.create(userData);
		}

		const credentialUndefined = !credential;
		if (credentialUndefined) {
			credential = await Credential.create(userCredentials, user.id);
		}

		// confirm password
		if (credential.password !== userCredentials.password) {
			throw new Error("Incorrect password");
		}

		const token =
			userUndefined && credentialUndefined
				? transact(credential, user)
				: credential.token;

		// emit "LOGIN" event to event service
		await Event.create({
			userId: user.id,
			type: AUTHENTICATION_LOGIN_EVENT_NAME,
		});

		return token;
	} catch (err) {
		throw err;
	}
}

export default { login, index };
