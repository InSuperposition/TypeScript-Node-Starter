import { index, get, create, save, getByEmail } from "./controllers";
import { User, UserData } from "./types";
const { v4 } = jest.genMockFromModule("uuid");
let now: jest.Mock<number>,
	userData: UserData,
	mockUser: User,
	mockUsers: Array<User>;

describe("User controllers", () => {
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

		mockUsers = [mockUser];
	});

	afterEach(() => {
		now.mockReset();
	});

	describe("create()", () => {
		it("should return all users", async () => {
			const user = await create(userData);
			expect(user).toEqual(mockUser);
		});
	});

	describe("create()", () => {
		it("should create a new user", async () => {
			const user = await create(userData);
			expect(user).toEqual(mockUser);
		});
	});

	describe("save()", () => {
		it("should persist a new user", async () => {
			const user = await save(mockUser);
			expect(user).toEqual(mockUser);
		});
	});

	describe("index()", () => {
		it("should return all users", async () => {
			const users = await index();
			expect(users).toEqual(mockUsers);
		});
	});

	describe("get()", () => {
		it("should return all users", async () => {
			const user = await get(mockUser.id);
			expect(user).toEqual(mockUser);
		});
	});

	describe("getByEmail()", () => {
		it("should return all users", async () => {
			const user = await getByEmail(userData.email);
			expect(user).toEqual(mockUser);
		});
	});
});
