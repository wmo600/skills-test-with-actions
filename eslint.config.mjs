// eslint.config.js
import globals from 'globals';

export default [
  {
    files: ['**/*.js'], // Match your JavaScript files
    languageOptions: {
      globals: {
        ...globals.browser, // Add browser globals if needed (e.g., `window`, `document`)
        ...globals.node // Add Node.js globals if needed (e.g., `process`)
      },
      ecmaVersion: 'latest', // Specify the ECMAScript version
    },
    rules: {
      'no-unused-vars': 'warn',
      'no-undef':'warn',
      'semi': ['error', 'always'],
      'quotes': ['warn', 'single']
    }
  }
];
