module.exports = {
  extends: [
    'eslint:recommended',
    'next/core-web-vitals',
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:storybook/recommended',
  ],
  rules: {
    'import/prefer-default-export': 'off',
    'import/no-default-export': 'error',
    'import/no-anonymous-default-export': 'off',
    'react/jsx-props-no-spreading': 'off',
    'max-len': [
      'error',
      {
        code: 100,
        ignoreComments: true,
        ignoreUrls: true,
        ignoreTemplateLiterals: true,
        ignoreStrings: true,
      },
    ],
    'max-lines': 'error',
    'max-lines-per-function': ['error', { max: 80 }],
    'max-depth': ['error', { max: 4 }],
    'max-params': ['error', { max: 3 }],
    'react/react-in-jsx-scope': 'off',
    'arrow-body-style': 'off',
    'prefer-const': 'error',
    'sort-imports': 'off',
    'no-magic-numbers': 'error',
    'require-await': 'error',
    'no-console': 'error',

    'react/function-component-definition': [
      2,
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
    'import/no-unresolved': ['off'],
    'import/extensions': 'off',
  },
  parserOptions: {
    project: './tsconfig.json',
  },
  overrides: [
    {
      files: ['pages/**', 'pages/api/**', 'global.d.ts', '*.wc.ts'],
      rules: {
        'import/no-default-export': 'off',
        'import/prefer-default-export': 'error',
      },
    },
    {
      // or whatever matches stories specified in .storybook/main.js
      files: ['*.stories.@(ts|tsx|js|jsx|mjs|cjs)'],
      rules: {
        // example of overriding a rule
        'storybook/hierarchy-separator': 'error',
        // example of disabling a rule
        'storybook/default-exports': 'off',
      },
    },
  ],
};
