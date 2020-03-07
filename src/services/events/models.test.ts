import { Event, EventData } from "./types";
import { create, read } from "./models";
let now: jest.Mock<number>, eventData: EventData, mockEvent: Event;

describe("Event model", () => {
	beforeEach(() => {
		jest.resetModules();
		const { v4 } = jest.genMockFromModule("uuid");

		const timestamp = 1234567890;
		now = global.Date.now = jest.fn(() => timestamp);

		eventData = {
			type: "test-event",
		};

		mockEvent = {
			...eventData,
			id: v4(),
			created: now(),
		};
	});

	afterEach(() => {
		jest.resetAllMocks();
	});

	describe("create()", () => {
		it("should create a user", async () => {
			const newEvent = await create(eventData);
			expect(newEvent).toEqual(mockEvent);
		});
	});

	describe("read()", () => {
		it("should be empty", async () => {
			const events = await read();
			expect(events).toEqual([]);
		});
	});
});
