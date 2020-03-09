import { index, getByUserId, create, save, insert } from "./controllers";
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
		it("should create a new event", async () => {
			const event = await create(eventData);
			expect(event).toEqual(mockEvent);
		});
	});

	describe("save()", () => {
		it("should persist an event", async () => {
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
		it("should return an event by `id`", async () => {
			const event = await getByUserId(mockEvent.userId);
			expect(event).toEqual(mockEvent);
		});
	});

	describe("insert()", () => {
		it("should create and persist a new event", async () => {
			const event = await insert(eventData);
			expect(event).toEqual(mockEvent);
		});
	});
});
