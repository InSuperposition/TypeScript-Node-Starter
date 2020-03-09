import joi from "@hapi/joi";
const eventDataSchema = joi.object().keys({
	type: joi.string().required(),
	userId: joi.string().required(),
});

const eventSchema = eventDataSchema.keys({
	id: joi.string().required(),
	created: joi.number().required(),
});

export const validateEventData = eventDataSchema.validate;
export const validateEvent = eventSchema.validate;
