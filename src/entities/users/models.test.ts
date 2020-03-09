import { User, UserData } from "./types";
import { create, save, insert, getMany, getOne, getByEmail } from "./models";
const { v4 } = jest.genMockFromModule("uuid");
let now: jest.Mock<number>,
	userData: UserData,
	mockUser: User,
	mockUsers: Array<User>;

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

		mockUsers = [mockUser];
	});

	afterEach(() => {
		now.mockReset();
	});
	describe("create()", () => {
		it("should return a new user object", async () => {
			const newUser = await create(userData);
			expect(newUser).toEqual(mockUser);
		});
	});

	describe("save()", () => {
		it("should store user", async () => {
			const newUser = await save(mockUser);
			expect(newUser).toEqual(mockUser);
		});
	});

	describe("getMany()", () => {
		it("should return users index", async () => {
			const emptyQuery = {};
			const users = await getMany(emptyQuery);

			expect(users).toEqual(mockUsers);
		});
	});

	describe("getOne()", () => {
		it("should return a user by `id`", async () => {
			const user = await getOne(mockUser.id);
			expect(user).toEqual(mockUser);
		});
	});

	describe("getByEmail()", () => {
		it("should return a user by `email`", async () => {
			const user = await getByEmail(userData.email);
			expect(user).toEqual(mockUser);
		});
	});

	describe("insert()", () => {
		it("should create a user and store value", async () => {
			const newUser = await insert(userData);
			expect(newUser).toEqual(mockUser);
		});
	});
});
