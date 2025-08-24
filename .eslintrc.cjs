module.exports = {
  parser: "@typescript-eslint/parser",
  plugins: [
    "@typescript-eslint",
    "react",
    "react-hooks",
    "react-refresh"
  ],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended"
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: [
      './tsconfig.json',
      './tsconfig.app.json',
      './tsconfig.node.json'
    ]
  },

  settings: {
    react: {
      version: "detect" // Automatically detect the React version
    }
  },
  rules: {
    // Add your custom rules here
    "react/react-in-jsx-scope": "off", // Not needed with new React versions
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true }
    ],
    // Add any other rules from your original config
  },
  env: {
    browser: true,
    es2020: true
  },
  ignorePatterns: ["dist", "node_modules"], // Add files/folders to ignore

  overrides: [
    {
      files: [
        '*.js',
        '*.cjs'
      ],
      parser: 'espree', // Use the default ESLint parser for JS files
      parserOptions: {
        project: null // Remove the project setting for these files
      },
      rules: {
        // You can add any specific rules for JS config files here if needed
      }
    },
    {
      files: [
        '.eslintrc.cjs' // Target the ESLint config file
      ],
      env: {
        node: true // Set the environment to Node.js
      }
    }
  ]
};

