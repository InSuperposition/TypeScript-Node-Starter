import joi from "@hapi/joi";
const userDataSchema = joi.object().keys({
	email: joi.string(),
	phoneNumber: joi.string(),
});

const userSchema = userDataSchema.keys({
	id: joi.string(),
	created: joi.number(),
});

export const validateUserData = userDataSchema.validate;
export const validateUser = userSchema.validate;
