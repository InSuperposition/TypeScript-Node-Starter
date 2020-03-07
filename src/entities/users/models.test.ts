import { User, UserData } from "./types";
import { insert, getMany } from "./models";
const { v4 } = jest.genMockFromModule("uuid");
let now: jest.Mock<number>, userData: UserData, mockUser: User;
describe("User model", () => {
	beforeEach(() => {
		const timestamp = 1234567890;
		now = global.Date.now = jest.fn(() => timestamp);

		userData = {
			email: "test@test.com",
			phoneNumber: "333-222-4444",
		};

		mockUser = {
			...userData,
			id: v4(),
			created: now(),
		};
	});

	afterEach(() => {
		now.mockReset();
	});
	it("should create a user", () => {
		const newUser = insert(userData);
		expect(newUser).toEqual(mockUser);
	});
});
