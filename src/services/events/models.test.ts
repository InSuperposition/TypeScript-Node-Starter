import { Event, EventData } from "./types";
import { create, save, insert, getMany, getByUserId } from "./models";
const { v4 } = jest.genMockFromModule("uuid");
let now: jest.Mock<number>,
	eventData: EventData,
	mockEvent: Event,
	mockEvents: Array<Event>;

describe("Event model", () => {
	beforeEach(() => {
		const timestamp = 1234567890;
		now = global.Date.now = jest.fn(() => timestamp);

		eventData = {
			type: "LOGIN",
			userId: "user-id-1",
		};

		mockEvent = {
			...eventData,
			id: v4(),
			created: now(),
		};

		mockEvents = [mockEvent];
	});

	afterEach(() => {
		now.mockReset();
	});

	describe("create()", () => {
		it("should return a new event object", async () => {
			const event = await create(eventData);
			expect(event).toEqual(mockEvent);
		});
	});

	describe("save()", () => {
		it("should store event", async () => {
			const event = await save(mockEvent);
			expect(event).toEqual(mockEvent);
		});
	});

	describe("getMany()", () => {
		it("should return events", async () => {
			const emptyQuery = {};
			const events = await getMany(emptyQuery);

			expect(events).toEqual(mockEvents);
		});
	});

	describe("getOne()", () => {
		it("should return one event", async () => {
			const event = await getByUserId(mockEvent.userId);
			expect(event).toEqual(mockEvent);
		});
	});

	describe("insert()", () => {
		it("should create a event and store value", async () => {
			const event = await insert(eventData);
			expect(event).toEqual(mockEvent);
		});
	});
});
