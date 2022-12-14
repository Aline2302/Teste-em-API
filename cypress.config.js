const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    "specPattern": ["cypress/e2e/features/**/*.feature", "cypress/e2e/**/*.cy.js"],
    "baseUrl": "https://fakerestapi.azurewebsites.net/api",
    "video": false
  }
});
