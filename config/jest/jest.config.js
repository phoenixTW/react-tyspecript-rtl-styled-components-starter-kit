module.exports = {
    collectCoverage: true,
    coverageThreshold: {
        global: {
            branches: 100,
            functions: 100,
            lines: 100,
            statements: 100
        }
    },
    collectCoverageFrom: [
        '<rootDir>/src/**/*.(ts|tsx)',
        '!<rootDir>/**/index.(ts|tsx)',
        '!<rootDir>/node_modules/**',
        '!<rootDir>/src/**/types.(ts|tsx)',
        '!<rootDir>/src/**/types/**'
    ],
    coverageDirectory: '<rootDir>/coverage/',
    moduleFileExtensions: ['.mjs', 'ts', 'tsx', 'js', 'jsx', 'svg'],
    roots: ['<rootDir>/src/'],
    rootDir: '../../',
    setupFilesAfterEnv: ['<rootDir>/config/jest/setupAfterEnv.js'],
    testEnvironment: 'jsdom',
    testMatch: ['**/*.(spec|test).(ts|tsx)'],
    verbose: true,
    moduleNameMapper: {
        '\\.(css|less)$': '<rootDir>/config/jest/__mocks__/styleMock.js'
    }
};
