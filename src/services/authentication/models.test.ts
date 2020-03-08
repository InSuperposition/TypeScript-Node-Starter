// import { CredentialsRow, UserCredentials } from "./types";
// import { create, read } from "./models";
// let now: jest.Mock<number>, userCredentials: UserCredentials, mockCredential: CredentialsRow;

// describe("CredentialsRow model", () => {
// 	beforeEach(() => {
// 		jest.resetModules();
// 		const { v4 } = jest.genMockFromModule("uuid");

// 		const timestamp = 1234567890;
// 		now = global.Date.now = jest.fn(() => timestamp);

// 		userCredentials = {
// 			type: "test-credential",
// 		};

// 		mockCredential = {
// 			...userCredentials,
// 			id: v4(),
// 			created: now(),
// 		};
// 	});

import { CredentialsRow, UserCredentials } from "./types";
import { create, save, insert, getMany, getByEmail } from "./models";
const { v4 } = jest.genMockFromModule("uuid");
let now: jest.Mock<number>,
	userCredentials: UserCredentials,
	mockCredential: CredentialsRow,
	mockCredentials: Array<CredentialsRow>;

describe("Authentication model", () => {
	beforeEach(() => {
		const timestamp = 1234567890;
		now = global.Date.now = jest.fn(() => timestamp);

		userCredentials = {
			email: "test@test.com",
			password: "test-password",
			userId: "user-id-1",
		};

		mockCredential = {
			...userCredentials,
			id: v4(),
			created: now(),
			token: v4(),
		};

		mockCredentials = [mockCredential];
	});

	afterEach(() => {
		now.mockReset();
	});

	describe("create()", () => {
		it("should return a new credential object", async () => {
			const credential = await create(userCredentials);
			expect(credential).toEqual(mockCredential);
		});
	});

	describe("save()", () => {
		it("should create a credential and store value", async () => {
			const credential = await save(mockCredential);
			expect(credential).toEqual(mockCredential);
		});
	});

	describe("getMany()", () => {
		it("should create a credential and store value", async () => {
			const emptyQuery = {};
			const credentials = await getMany(emptyQuery);

			expect(credentials).toEqual(mockCredentials);
		});
	});

	describe("insert()", () => {
		it("should create a credential and store value", async () => {
			const credential = await insert(userCredentials);
			expect(credential).toEqual(mockCredential);
		});
	});
});
