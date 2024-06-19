import { defineConfig } from 'cypress';

export default defineConfig({
  component: {
    devServer: {
      framework: 'next',
      bundler: 'webpack',
    },
    specPattern: 'components/**/*.spec.{js,jsx,ts,tsx}',
  },

  e2e: {
    specPattern: 'cypress/e2e/**/*.spec.{js,jsx,ts,tsx}',
    baseUrl: process.env.E2E_URL ?? 'http://localhost:3000',
  },
});
