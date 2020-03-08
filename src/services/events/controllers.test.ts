import { index, get, create, save } from "./controllers";
import { Event, EventData } from "./types";
const { v4 } = jest.genMockFromModule("uuid");
let now: jest.Mock<number>,
	eventData: EventData,
	mockEvent: Event,
	mockEvents: Array<Event>;

describe("Event controllers", () => {
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
		it("should return all events", async () => {
			const event = await create(eventData);
			expect(event).toEqual(mockEvent);
		});
	});

	describe("save()", () => {
		it("should return all events", async () => {
			const event = await save(mockEvent);
			expect(event).toEqual(mockEvent);
		});
	});

	describe("index()", () => {
		it("should return all events", async () => {
			const events = await index();
			expect(events).toEqual(mockEvents);
		});
	});

	describe("get()", () => {
		it("should return all events", async () => {
			const event = await get(mockEvent.id);
			expect(event).toEqual(mockEvent);
		});
	});
});
