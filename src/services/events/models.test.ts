import { Event, EventData } from "./types";
import { create, save, insert, getMany, getOne } from "./models";
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
		it("should create a event and store value", async () => {
			const event = await save(mockEvent);
			expect(event).toEqual(mockEvent);
		});
	});

	describe("getMany()", () => {
		it("should create a event and store value", async () => {
			const emptyQuery = {};
			const events = await getMany(emptyQuery);

			expect(events).toEqual(mockEvents);
		});
	});

	describe("getOne()", () => {
		it("should create a event and store value", async () => {
			const event = await getOne(mockEvent.id);
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
