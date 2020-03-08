import { CredentialsRow, UserCredential } from "./types";
import { create, save, insert, getMany, getByEmail } from "./models";
const { v4 } = jest.genMockFromModule("uuid");
let now: jest.Mock<number>,
	userCredential: UserCredential,
	mockCredential: CredentialsRow,
	mockCredentials: Array<CredentialsRow>;

describe("Authentication model", () => {
	beforeEach(() => {
		const timestamp = 1234567890;
		now = global.Date.now = jest.fn(() => timestamp);

		userCredential = {
			email: "test@test.com",
			password: "test-password",
		};

		mockCredential = {
			...userCredential,
			id: v4(),
			created: now(),
			token: v4(),
			userId: v4(),
		};

		mockCredentials = [mockCredential];
	});

	afterEach(() => {
		now.mockReset();
	});

	describe("create()", () => {
		it("should return a new credential object", async () => {
			const credential = await create(userCredential, mockCredential.id);
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
			const credential = await insert(userCredential, mockCredential.id);
			expect(credential).toEqual(mockCredential);
		});
	});
});
