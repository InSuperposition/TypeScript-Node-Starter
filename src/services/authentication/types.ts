export interface UserCredentials {
	email: string;
	password: string;
}

export interface CredentialsRow extends UserCredentials {
	// primary key
	id: string;
	created: number;
	token: string;
	// foreign key
	userId: string;
}
