const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://www.thelightninggroup.co.uk",
    setupNodeEvents(on, config) {
      // Add plugin support here if needed
    },
  },
});
