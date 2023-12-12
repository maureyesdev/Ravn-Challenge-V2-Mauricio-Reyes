module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint/eslint-plugin',
    'hexagonal-architecture',
    'no-relative-import-paths',
  ],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js', 'src/main.ts'],
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'no-relative-import-paths/no-relative-import-paths': ['error'],
    'no-duplicate-imports': 'error',
    'no-console': 'error',
    'no-restricted-imports': [
      'error',
      {
        paths: [
          {
            name: '@nestjs/graphql',
            importNames: ['ID'],
            message: 'Please use Int instead of ID.',
          },
        ],
      },
    ],
  },
  overrides: [
    {
      files: ['./src/**/*.ts'],
      rules: {
        'hexagonal-architecture/enforce': ['error'],
      },
    },
  ],
};
