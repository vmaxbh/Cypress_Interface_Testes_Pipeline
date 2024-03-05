const { defineConfig } = require("cypress");

module.exports = defineConfig({
 e2e: {
    baseUrl: 'https://countries.petethompson.net/',
    video: true,
 },
 reporter: "mochawesome",
 reporterOptions: {
    reportDir: `cypress/reports/`,
    quiet: false,
    overwrite: false,
    html: true,
    json: false,
 },
 chromeWebSecurity: false,
});