module.exports = {
	collectCoverageFrom: [
		'src/**/*.js',
		'!src/**/*.test.js',
	],
	setupFilesAfterEnv: [
		'./config/jest.setup.js',
	],
};
