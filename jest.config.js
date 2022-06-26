const { pathsToModuleNameMapper } = require("ts-jest");
const { compilerOptions } = require("./tsconfig");

module.exports = {
  roots: ["<rootDir>"],
  modulePaths: ["<rootDir>"],
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths),
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  testEnvironment: "jest-environment-jsdom",
  testPathIgnorePatterns: [
    "<rootDir>/.next/",
    "<rootDir>/node_modules/",
    "<rootDir>/pages/",
    "<rootDir>/coverage/",
    "<rootDir>/public/",
  ],
  moduleDirectories: ['node_modules', __dirname],
  moduleNameMapper: {
    "\\.svg": "<rootDir>/svgMock.js",
  },
  coverageThreshold: {
    global: {
      statements: 90,
      branches: 90,
      functions: 90,
      lines: 90,
    },
  },
  collectCoverageFrom: [
    "components/**/*.{ts,tsx}",
    "!components/FlexboxGrid/FlexboxGrid.tsx",
    "containers/**/*.{ts,tsx}",
    "utils/**/*.{ts}",
    "!./**/index.{ts,tsx}",
    "!theme/*",
    "!models/*",
    "!mocks/**/*.{js,jsx,ts,tsx}",
  ],
  coverageReporters: ["json", "lcov", "text", "cobertura"],
};
