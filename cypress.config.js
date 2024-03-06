const { defineConfig } = require("cypress");

module.exports = defineConfig({
 e2e: {
    baseUrl: 'https://countries.petethompson.net/',
    video: true,
 },
 reporter: "mochawesome",
 reporterOptions: {
    reportFilename: "[datetime]-[name]-report",
    timestamp: "longDate",
    reportDir: `cypress/reports`,
    quiet: false,
    overwrite: false,
    html: true,
    json: false,
 },
 chromeWebSecurity: false,
});