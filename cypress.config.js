const { defineConfig } = require("cypress");

module.exports = defineConfig({
 e2e: {
    baseUrl: 'https://countries.petethompson.net/',
    video: true,
 },
 reporter: "mochawesome",
 reporterOptions: {
    reportFilename: "[status]_[datetime]-[name]-report",
    timestamp: "longDate",
    reportDir: `cypress/reports`,
    quiet: false,
    overwrite: false,
    html: true,
    json: true,
 },
 chromeWebSecurity: false,
});