import { defineConfig } from "cypress";

export default defineConfig({

  e2e: {
    baseUrl: 'http://localhost:4001',
    setupNodeEvents() {
      // implement node event listeners here
    },
  },
});
