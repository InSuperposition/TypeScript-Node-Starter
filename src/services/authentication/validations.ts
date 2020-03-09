import joi from "@hapi/joi";
const userCredentialSchema = joi.object().keys({
	email: joi.string().required(),
	password: joi.string().required(),
});

const credentialsRowSchema = userCredentialSchema.keys({
	id: joi.string().required(),
	created: joi.number().required(),
});

export const validateUserCredential = userCredentialSchema.validate;
export const validateCredentialsRow = credentialsRowSchema.validate;
