const {defineConfig} = require('cypress')

module.exports = defineConfig({
    video: false,
    reporter: 'cypress-multi-reporters',
    reporterOptions: {
        configFile: 'reporter-config.json',
    },
    timeout: 120e3,
    pageLoadTimeout: 120e3,
    responseTimeout: 120e3,
    e2e: {
        baseUrl: 'https://www.iddaa.com/',
        setupNodeEvents(on, config) {
            return require('./cypress/plugins/index.js')(on, config)
        },
    },
})