module.exports = {
  testEnvironment: "jest-environment-jsdom", // Required for testing React components
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1", // Alias configuration to resolve paths
  },
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"], // File to extend jest with matchers and setup
  testPathIgnorePatterns: ["/node_modules/", "/.next/"], // Ignore built files and dependencies
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "babel-jest", // Use Babel to transform JS/TS files
  },
  collectCoverageFrom: [
    "src/**/*.{js,jsx,ts,tsx}", // Specify files to collect test coverage from
    "!src/**/*.d.ts", // Ignore TypeScript declaration files
  ],
};
