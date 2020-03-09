import joi from "@hapi/joi";
const userDataSchema = joi.object({
	email: joi.string(),
	phoneNumber: joi.string(),
});

const userSchema = joi.object({
	email: joi.string(),
	phoneNumber: joi.string(),
	id: joi.string(),
	created: joi.number(),
});

export const validateUserData = userDataSchema.validate;
export const validateUser = userSchema.validate;
