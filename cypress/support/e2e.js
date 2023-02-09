import './commands'
import 'cypress-plugin-api'

Cypress.on('uncaught: exception', (err, runnable) => {
    if (err.message.includes('Cannot read properties of undefined')) {
        return false
    }
})