Cypress.Commands.add('restPaises', () => {
    cy.visit('https://restcountries.com/')
    cy.get('.content > :nth-child(1)').should('exist')
    
})

Cypress.Commands.add('projeto', () => {
    cy.contains('This project is inspired on restcountries.eu by Fayder Florez. Although the original project has now moved to a subscription base API, this project is still Open Source and Free to use.')
    cy.contains('The structure of V2 has been reverted to its original form from the Original Project to maintain compatibility.')
    cy.screenshot('projeto')
})

Cypress.Commands.add('contributing', () => {
    cy.contains('Any help is always welcome! Just edit the relevant file and create a new Merge Request or you can also donate using Patreon or PayPal.')
    cy.screenshot('contributing')
})

Cypress.Commands.add('donations', () => {
    cy.contains('This are getting out of control (in a positive way). I’m getting about 4 million hits each day and that means CPU ussage (sometimes at 99%) and also bandwidth consumption (120 GB per day!) so costs have obviously increased. Please, consider making a donation on Patreon or PayPal. This will help me pay the server’s bills')
    cy.screenshot('donations')
})

Cypress.Commands.add('fields', () => {
    cy.contains('You can check the FIELDS.md file to get a description for each field (thanks to @ePascalC!).')
    cy.screenshot('fields')

})

Cypress.Commands.add('endpoits', () => {
    cy.contains('Below are described the REST endpoints available that you can use to search for countries')
    cy.contains('Now you can get all independent (or not independent) countries by calling this endpoint:')
    cy.contains('If you don’t specify the status, true will be taken as default. You can mix it with the fields filter like this:')
    cy.screenshot('endpoits')
    
})
