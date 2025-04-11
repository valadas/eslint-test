import stencil from '@stencil/eslint-plugin';
import tseslint from 'typescript-eslint';
import eslint from '@eslint/js';

export default tseslint.config(
  eslint.configs.recommended,
  tseslint.configs.recommendedTypeChecked,
  stencil.configs.flat.recommended,
  {
    files: [
      "src/**/*.{ts,tsx}",
    ],
  },
  {
      ignores: [
        "dist/",
        "www/",
        "eslint.config.ts",
        "stencil.config.ts",
      ],
  },
  {
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      parserOptions: {
        projectService: true,
        project: './tsconfig.eslint.json',
        tsconfigRootDir: __dirname,
      }
    }
  },
  {
    rules: {
      '@stencil-community/strict-boolean-conditions': 'off',
    }
  }
)
