describe('Área do Projeto validações de Informações da Interface', () => {
    beforeEach(() => {
        cy.restPaises() 
    });

    it('Confirmações de informações do Projeto', () => {
        cy.projeto()
        cy.fields()
        cy.endpoits()
        
    });

    it('Confirmações de informações do Projeto', () => {
        cy.contributing()
        cy.donations()
        
    });
    
});