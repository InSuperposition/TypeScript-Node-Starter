import { Event, EventData } from "./types";
import { createEvent, readEvent } from "./controllers";
let eventData: EventData, mockEvent: Event;

const { v4 } = jest.genMockFromModule("uuid");

const timestamp = 1234567890;
const now: jest.Mock<number> = (global.Date.now = jest.fn(() => timestamp));

describe("Event model", () => {
	beforeEach(() => {
		eventData = {
			type: "test-event",
		};

		mockEvent = {
			...eventData,
			id: v4(),
			created: now(),
		};
	});

	describe("read()", () => {
		it("should be empty", async () => {
			const events = await readEvent();
			expect(events).toEqual([]);
		});
	});

	describe("create()", () => {
		it("should create a user", async () => {
			const newEvent = await createEvent(eventData);
			expect(newEvent).toEqual(mockEvent);
		});
	});
});
