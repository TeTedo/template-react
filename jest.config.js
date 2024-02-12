module.exports = {
	testEnvironment: 'jsdom',
	setupFilesAfterEnv: ['./jest.setup'],
	testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/dist/'],
};
