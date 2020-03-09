import joi from "@hapi/joi";
const userCredentialSchema = joi.object({
	email: joi.string().required(),
	password: joi.string().required(),
});

const credentialsRowSchema = joi.object({
	email: joi.string().required(),
	password: joi.string().required(),
	id: joi.string().required(),
	created: joi.number().required(),
});

export const validateUserCredential = userCredentialSchema.validate;
export const validateCredentialsRow = credentialsRowSchema.validate;
