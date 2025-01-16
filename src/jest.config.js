module.exports = {
    transform: {
      '^.+\\.(js|jsx|mjs|cjs|ts|tsx)$': 'babel-jest',
    },
    transformIgnorePatterns: [
      '/node_modules/(?!axios)', // Allow Jest to process `axios` and other ESM modules
    ],
  };
  