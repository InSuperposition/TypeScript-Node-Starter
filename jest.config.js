module.exports = {
	globals: {
		"ts-jest": {
			tsConfig: "tsconfig.json",
		},
	},
	moduleFileExtensions: ["ts", "js"],
	transform: {
		"^.+\\.(ts|tsx)$": "ts-jest",
	},
	testEnvironment: "node",
	testMatch: ["<rootDir>/src/**/*.test.(ts|js)"],
	testPathIgnorePatterns: ["<rootDir>/node_modules/", "<rootDir>/dist/"],
};
