import joi from "@hapi/joi";
const eventDataSchema = joi.object({
	type: joi.string().required(),
	userId: joi.string().required(),
});

const eventSchema = joi.object({
	type: joi.string().required(),
	userId: joi.string().required(),
	id: joi.string().required(),
	created: joi.number().required(),
});

export const validateEventData = eventDataSchema.validate;
export const validateEvent = eventSchema.validate;
