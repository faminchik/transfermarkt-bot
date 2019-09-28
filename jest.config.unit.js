// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
    // An array of directory names to be searched recursively up from the requiring module's location
    moduleDirectories: ['node_modules', 'src'],

    // Automatically restore mock state between every test
    restoreMocks: true,

    testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/dist/'],

    // The test environment that will be used for testing
    testEnvironment: 'node',

    // The glob patterns Jest uses to detect test files
    testMatch: ['**/__tests__/**/?(*.)+(spec).[jt]s']
};
