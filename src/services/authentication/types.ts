export interface UserCredential {
	email: string;
	password: string;
}

export interface CredentialsRow extends UserCredential {
	// primary key
	id: string;
	created: number;
	token: string;
	// foreign key
	userId: string;
}
