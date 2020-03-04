export interface UserData {
	email: string;
	phoneNumber?: string;
}

export interface User extends UserData {
	readonly id: string;
	readonly created: number;
}
