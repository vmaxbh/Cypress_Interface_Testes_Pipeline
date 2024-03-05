Cypress.Commands.add('petethompson', () => {
    cy.visit('/')
})

Cypress.Commands.add('campoPesquisaBrasil', () => {
    console.log('Iniciando pesquisa para Brasil...');
    cy.get('#search-box').type('Brasil');
    cy.get('tbody > :nth-child(1) > .ng-binding').should('contain', 'BR');
    cy.get('tbody > :nth-child(2) > .ng-binding').should('contain', 'BRA');
    cy.get(':nth-child(3) > td').should('contain', 'BRL');
    cy.get(':nth-child(4) > td').should('contain', '55');
    cy.get(':nth-child(5) > td').should('contain', 'por');
    cy.wait(1000);
    console.log('Pesquisa para Brasil concluída com sucesso!');
});

Cypress.Commands.add('campoPesquisaArgentina', () => {
    console.log('Iniciando pesquisa para Argentina...');
    cy.get('#search-box').type('Argentina');
    cy.get('tbody > :nth-child(1) > .ng-binding').should('contain', 'AR');
    cy.get('tbody > :nth-child(2) > .ng-binding').should('contain', 'ARG');
    cy.get(':nth-child(3) > td').should('contain', 'ARS');
    cy.get(':nth-child(4) > td').should('contain', '54');
    cy.get(':nth-child(5) > td').should('contain', 'grnspa');
    cy.wait(1000);
    console.log('Pesquisa para Argentina concluída com sucesso!');
});

Cypress.Commands.add('campoPesquisaPortugal', () => {
    console.log('Iniciando pesquisa para Portugal...');
    cy.get('#search-box').type('Portugal');
    cy.get('tbody > :nth-child(1) > .ng-binding').should('contain', 'PT');
    cy.get('tbody > :nth-child(2) > .ng-binding').should('contain', 'PRT');
    cy.get(':nth-child(3) > td').should('contain', 'EUR');
    cy.get(':nth-child(4) > td').should('contain', '351');
    cy.get(':nth-child(5) > td').should('contain', 'por');
    cy.wait(1000);
    console.log('Pesquisa para Portugal concluída com sucesso!');
});

Cypress.Commands.add('campoPesquisaMexico', () => {
    console.log('Iniciando pesquisa para México...');
    cy.get('#search-box').type('Mexico');
    cy.get('tbody > :nth-child(1) > .ng-binding').should('contain', 'MX');
    cy.get('tbody > :nth-child(2) > .ng-binding').should('contain', 'MEX');
    cy.get(':nth-child(3) > td').should('contain', 'MXN');
    cy.get(':nth-child(4) > td').should('contain', '52');
    cy.get(':nth-child(5) > td').should('contain', 'spa');
    cy.wait(1000);
    console.log('Pesquisa para México concluída com sucesso!');
});

Cypress.Commands.add('campoPesquisaEUA', () => {
    console.log('Iniciando pesquisa para Estados Unidos...');
    cy.get('#search-box').type('Estados Unidos');
    cy.get('tbody > :nth-child(1) > .ng-binding').should('contain', 'US');
    cy.get('tbody > :nth-child(2) > .ng-binding').should('contain', 'USA');
    cy.get(':nth-child(3) > td').should('contain', 'USDUSNUSS');
    cy.get(':nth-child(4) > td').should('contain', '1');
    cy.get(':nth-child(5) > td').should('contain', 'eng');
    cy.wait(1000);
    console.log('Pesquisa para Estados Unidos concluída com sucesso!');
});

Cypress.Commands.add('campoPesquisaChina', () => {
    console.log('Iniciando pesquisa para China...');
    cy.get('#search-box').type('China');
    cy.get('tbody > :nth-child(1) > .ng-binding').should('contain', 'CN');
    cy.get('tbody > :nth-child(2) > .ng-binding').should('contain', 'CHN');
    cy.get(':nth-child(3) > td').should('contain', 'CNY');
    cy.get(':nth-child(4) > td').should('contain', '86');
    cy.get(':nth-child(5) > td').should('contain', 'cmn');
    cy.wait(1000);
    console.log('Pesquisa para China concluída com sucesso!');
});

Cypress.Commands.add('campoPesquisaJapao', () => {
    console.log('Iniciando pesquisa para Japão...')
    cy.get('#search-box').type('Japão')
    cy.get('tbody > :nth-child(1) > .ng-binding').should('contain', 'JP')
    cy.get('tbody > :nth-child(2) > .ng-binding').should('contain', 'JPN')
    cy.get(':nth-child(3) > td').should('contain', 'JPY')
    cy.get(':nth-child(4) > td').should('contain', '81')
    cy.get(':nth-child(5) > td').should('contain', 'jpn')
    cy.wait(1000)
    console.log('Pesquisa para Japão concluída com sucesso!');

})

Cypress.Commands.add('campoPesquisaRussia', () => {
    console.log('Iniciando pesquisa para Russia...');
    cy.get('#search-box').type('Russia');
    cy.get('tbody > :nth-child(1) > .ng-binding').should('contain', 'RU');
    cy.get('tbody > :nth-child(2) > .ng-binding').should('contain', 'RUS');
    cy.get(':nth-child(3) > td').should('contain', 'RUB');
    cy.get(':nth-child(4) > td').should('contain', '7');
    cy.get(':nth-child(5) > td').should('contain', 'rus')
    cy.wait(1000);
    console.log('Pesquisa para Russia concluída com sucesso!');

})

Cypress.Commands.add('campoPesquisaArmenia', () => {
    console.log('Iniciando pesquisa para Armenia...');
    cy.get('#search-box').type('Armenia');
    cy.get('tbody > :nth-child(1) > .ng-binding').should('contain', 'AM');
    cy.get('tbody > :nth-child(2) > .ng-binding').should('contain', 'ARM');
    cy.get(':nth-child(3) > td').should('contain', 'AMD');
    cy.get(':nth-child(4) > td').should('contain', '374');
    cy.get(':nth-child(5) > td').should('contain', 'hyerus');
    cy.wait(1000);
    console.log('Pesquisa para Armenia concluída com sucesso!');

})

Cypress.Commands.add('campoPesquisaAngola', () => {
    console.log('Iniciando pesquisa para Angola...');
    cy.get('#search-box').type('Angola');
    cy.get('tbody > :nth-child(1) > .ng-binding').should('contain', 'AO');
    cy.get('tbody > :nth-child(2) > .ng-binding').should('contain', 'AGO');
    cy.get(':nth-child(3) > td').should('contain', 'AOA');
    cy.get(':nth-child(4) > td').should('contain', '244');
    cy.get(':nth-child(5) > td').should('contain', 'por');
    cy.wait(1000);
    console.log('Pesquisa para Angola concluída com sucesso!');

})

Cypress.Commands.add('campoPesquisaAndorra', () => {
    console.log('Iniciando pesquisa para Andorra...');
    cy.get('#search-box').type('Andorra');
    cy.get('tbody > :nth-child(1) > .ng-binding').should('contain', 'AD');
    cy.get('tbody > :nth-child(2) > .ng-binding').should('contain', 'AND');
    cy.get(':nth-child(3) > td').should('contain', 'EUR');
    cy.get(':nth-child(4) > td').should('contain', '376');
    cy.get(':nth-child(5) > td').should('contain', 'cat');
    cy.wait(1000);
    console.log('Pesquisa para Andorra concluída com sucesso!');

})


Cypress.Commands.add('campoPesquisaBelgica', () => {
    console.log('Iniciando pesquisa para Bélgica...');
    cy.get('#search-box').type('Belgium');
    cy.get('tbody > :nth-child(1) > .ng-binding').should('contain', 'BE');
    cy.get('tbody > :nth-child(2) > .ng-binding').should('contain', 'BEL');
    cy.get(':nth-child(3) > td').should('contain', 'EUR');
    cy.get(':nth-child(4) > td').should('contain', '32');
    cy.get(':nth-child(5) > td').should('contain', 'deufranld');
    cy.wait(1000);
    console.log('Pesquisa para Bélgica concluída com sucesso!');

})

Cypress.Commands.add('campoPesquisaBulgaria', () => {
    console.log('Iniciando pesquisa para Bulgária...');
    cy.get('#search-box').type('Bulgaria');
    cy.get('tbody > :nth-child(1) > .ng-binding').should('contain', 'BG');
    cy.get('tbody > :nth-child(2) > .ng-binding').should('contain', 'BGR');
    cy.get(':nth-child(3) > td').should('contain', 'BGN');
    cy.get(':nth-child(4) > td').should('contain', '359');
    cy.get(':nth-child(5) > td').should('contain', 'bul');
    cy.wait(1000);
    console.log('Pesquisa para Bulgária concluída com sucesso!');

})

Cypress.Commands.add('campoPesquisaBolivia', () => {
    console.log('Iniciando pesquisa para Bolívia...');
    cy.get('#search-box').type('Bolivia');
    cy.get('tbody > :nth-child(1) > .ng-binding').should('contain', 'BO');
    cy.get('tbody > :nth-child(2) > .ng-binding').should('contain', 'BOL');
    cy.get(':nth-child(3) > td').should('contain', 'BOBBOV');
    cy.get(':nth-child(4) > td').should('contain', '591');
    cy.get(':nth-child(5) > td').should('contain', 'aymgrnquespa');
    cy.wait(1000);
    console.log('Pesquisa para Bolívia concluída com sucesso!');

})

Cypress.Commands.add('campoPesquisaCuba', () => {
    console.log('Iniciando pesquisa para Cuba...');
    cy.get('#search-box').type('Cuba');
    cy.get('tbody > :nth-child(1) > .ng-binding').should('contain', 'CU');
    cy.get('tbody > :nth-child(2) > .ng-binding').should('contain', 'CUB');
    cy.get(':nth-child(3) > td').should('contain', 'CUCCUP');
    cy.get(':nth-child(4) > td').should('contain', '53');
    cy.get(':nth-child(5) > td').should('contain', 'spa');
    cy.wait(1000);
    console.log('Pesquisa para Cuba concluída com sucesso!');

})

Cypress.Commands.add('campoPesquisaChile', () => {
    console.log('Iniciando pesquisa para Chile...');
    cy.get('#search-box').type('Chile');
    cy.get('tbody > :nth-child(1) > .ng-binding').should('contain', 'CL');
    cy.get('tbody > :nth-child(2) > .ng-binding').should('contain', 'CHL');
    cy.get(':nth-child(3) > td').should('contain', 'CLFCLP');
    cy.get(':nth-child(4) > td').should('contain', '56');
    cy.get(':nth-child(5) > td').should('contain', 'spa');
    cy.wait(1000);
    console.log('Pesquisa para Chile concluída com sucesso!');

})

Cypress.Commands.add('campoPesquisaCostaRica', () => {
    console.log('Iniciando pesquisa para Costa Rica...');
    cy.get('#search-box').type('Costa Rica');
    cy.get('tbody > :nth-child(1) > .ng-binding').should('contain', 'CR');
    cy.get('tbody > :nth-child(2) > .ng-binding').should('contain', 'CRI');
    cy.get(':nth-child(3) > td').should('contain', 'CRC');
    cy.get(':nth-child(4) > td').should('contain', '506');
    cy.get(':nth-child(5) > td').should('contain', 'spa');
    cy.wait(1000);
    console.log('Pesquisa para Costa Rica concluída com sucesso!');

})

Cypress.Commands.add('campoPesquisaCaboVerde', () => {
    console.log('Iniciando pesquisa para Cabo Verde...');
    cy.get('#search-box').type('Cabo Verde');
    cy.get('tbody > :nth-child(1) > .ng-binding').should('contain', 'CV');
    cy.get('tbody > :nth-child(2) > .ng-binding').should('contain', 'CPV');
    cy.get(':nth-child(3) > td').should('contain', 'CVE');
    cy.get(':nth-child(4) > td').should('contain', '238');
    cy.get(':nth-child(5) > td').should('contain', 'por');
    cy.wait(1000);
    console.log('Pesquisa para Cabo Verde concluída com sucesso!');

})

Cypress.Commands.add('campoPesquisaDinamarca', () => {
    console.log('Iniciando pesquisa para Dinamarca...');
    cy.get('#search-box').type('Dinamarca');
    cy.get('tbody > :nth-child(1) > .ng-binding').should('contain', 'DK');
    cy.get('tbody > :nth-child(2) > .ng-binding').should('contain', 'DNK');
    cy.get(':nth-child(3) > td').should('contain', 'DKK');
    cy.get(':nth-child(4) > td').should('contain', '45');
    cy.get(':nth-child(5) > td').should('contain', 'dan');
    cy.wait(1000);
    console.log('Pesquisa para Dinamarca concluída com sucesso!');

})

Cypress.Commands.add('campoPesquisaEquador', () => {
    console.log('Iniciando pesquisa para Equador...');
    cy.get('#search-box').type('Equador');
    cy.get('tbody > :nth-child(1) > .ng-binding').should('contain', 'EC');
    cy.get('tbody > :nth-child(2) > .ng-binding').should('contain', 'ECU');
    cy.get(':nth-child(3) > td').should('contain', 'USD');
    cy.get(':nth-child(4) > td').should('contain', '593');
    cy.get(':nth-child(5) > td').should('contain', 'spa');
    cy.wait(1000);
    console.log('Pesquisa para Equador concluída com sucesso!');

})

Cypress.Commands.add('campoPesquisaEspanha', () => {
    console.log('Iniciando pesquisa para Espanha...');
    cy.get('#search-box').type('Espanha');
    cy.get('tbody > :nth-child(1) > .ng-binding').should('contain', 'ES');
    cy.get('tbody > :nth-child(2) > .ng-binding').should('contain', 'ESP');
    cy.get(':nth-child(3) > td').should('contain', 'EUR');
    cy.get(':nth-child(4) > td').should('contain', '34');
    cy.get(':nth-child(5) > td').should('contain', 'cateusglgocispa');
    cy.wait(1000);
    console.log('Pesquisa para Espanha concluída com sucesso!');

})

Cypress.Commands.add('campoPesquisaEslovenia', () => {
    console.log('Iniciando pesquisa para Eslovênia...');
    cy.get('#search-box').type('slovenia');
    cy.get('tbody > :nth-child(1) > .ng-binding').should('contain', 'SI');
    cy.get('tbody > :nth-child(2) > .ng-binding').should('contain', 'SVN');
    cy.get(':nth-child(3) > td').should('contain', 'EUR');
    cy.get(':nth-child(4) > td').should('contain', '386');
    cy.get(':nth-child(5) > td').should('contain', 'slv');
    cy.wait(1000);
    console.log('Pesquisa para Eslovênia concluída com sucesso!');

})

Cypress.Commands.add('campoPesquisaFinlandia', () => {
    console.log('Iniciando pesquisa para Finlandia...');
    cy.get('#search-box').type('Finlandia');
    cy.get('tbody > :nth-child(1) > .ng-binding').should('contain', 'FI');
    cy.get('tbody > :nth-child(2) > .ng-binding').should('contain', 'FIN');
    cy.get(':nth-child(3) > td').should('contain', 'EUR');
    cy.get(':nth-child(4) > td').should('contain', '358');
    cy.get(':nth-child(5) > td').should('contain', 'finswe');
    cy.wait(1000);
    console.log('Pesquisa para Finlandia concluída com sucesso!');

})

Cypress.Commands.add('campoPesquisaFilipinas', () => {
    console.log('Iniciando pesquisa para Filipinas...');
    cy.get('#search-box').type('Filipinas');
    cy.get('tbody > :nth-child(1) > .ng-binding').should('contain', 'PH');
    cy.get('tbody > :nth-child(2) > .ng-binding').should('contain', 'PHL');
    cy.get(':nth-child(3) > td').should('contain', 'PHP');
    cy.get(':nth-child(4) > td').should('contain', '63');
    cy.get(':nth-child(5) > td').should('contain', 'engfil');
    cy.wait(1000);
    console.log('Pesquisa para Filipinas concluída com sucesso!');

})

Cypress.Commands.add('campoPesquisaFranca', () => {
    console.log('Iniciando pesquisa para França...');
    cy.get('#search-box').type('França');
    cy.get('tbody > :nth-child(1) > .ng-binding').should('contain', 'FR');
    cy.get('tbody > :nth-child(2) > .ng-binding').should('contain', 'FRA');
    cy.get(':nth-child(3) > td').should('contain', 'EUR');
    cy.get(':nth-child(4) > td').should('contain', '33');
    cy.get(':nth-child(5) > td').should('contain', 'fra');
    cy.wait(1000);
    console.log('Pesquisa para França concluída com sucesso!');

})

Cypress.Commands.add('campoPesquisaGrecia', () => {
    console.log('Iniciando pesquisa para Grécia...');
    cy.get('#search-box').type('Grecia');
    cy.get('tbody > :nth-child(1) > .ng-binding').should('contain', 'GR');
    cy.get('tbody > :nth-child(2) > .ng-binding').should('contain', 'GRC');
    cy.get(':nth-child(3) > td').should('contain', 'EUR');
    cy.get(':nth-child(4) > td').should('contain', '30');
    cy.get(':nth-child(5) > td').should('contain', 'ell');
    cy.wait(1000);
    console.log('Pesquisa para Grécia concluída com sucesso!');

})

Cypress.Commands.add('campoPesquisaGana', () => {
    console.log('Iniciando pesquisa para Gana...');
    cy.get('#search-box').type('Gana');
    cy.get('tbody > :nth-child(1) > .ng-binding').should('contain', 'GH');
    cy.get('tbody > :nth-child(2) > .ng-binding').should('contain', 'GHA');
    cy.get(':nth-child(3) > td').should('contain', 'GHS');
    cy.get(':nth-child(4) > td').should('contain', '233');
    cy.get(':nth-child(5) > td').should('contain', 'eng');
    cy.wait(1000);
    console.log('Pesquisa para Gana concluída com sucesso!');

})

Cypress.Commands.add('campoPesquisaHolanda', () => {
    console.log('Iniciando pesquisa para Holanda...');
    cy.get('#search-box').type('Holanda');
    cy.get('tbody > :nth-child(1) > .ng-binding').should('contain', 'NL');
    cy.get('tbody > :nth-child(2) > .ng-binding').should('contain', 'NLD');
    cy.get(':nth-child(3) > td').should('contain', 'EUR');
    cy.get(':nth-child(4) > td').should('contain', '31');
    cy.get(':nth-child(5) > td').should('contain', 'nld');
    cy.wait(1000);
    console.log('Pesquisa para Holanda concluída com sucesso!');
})

Cypress.Commands.add('campoPesquisaIraque', () => {
    console.log('Iniciando pesquisa para Iraque...');
    cy.get('#search-box').type('Iraque');
    cy.get('tbody > :nth-child(2) > .ng-binding').should('contain', 'IRQ');
    cy.get(':nth-child(3) > td').should('contain', 'IQD');
    cy.get(':nth-child(4) > td').should('contain', '964');
    cy.get(':nth-child(5) > td').should('contain', 'araarckur');
    cy.wait(1000);
    console.log('Pesquisa para Iraque concluída com sucesso!');

})

Cypress.Commands.add('campoPesquisaIndia', () => {
    console.log('Iniciando pesquisa para Índia...');
    cy.get('#search-box').type('India');
    cy.get('tbody > :nth-child(1) > .ng-binding').should('contain', 'IN');
    cy.get('tbody > :nth-child(2) > .ng-binding').should('contain', 'IND');
    cy.get(':nth-child(3) > td').should('contain', 'INR');
    cy.get(':nth-child(4) > td').should('contain', '91');
    cy.get(':nth-child(5) > td').should('contain', 'enghin');
    cy.wait(1000);
    console.log('Pesquisa para Índia concluída com sucesso!');

})

Cypress.Commands.add('campoPesquisaItalia', () => {
    console.log('Iniciando pesquisa para Italia...');
    cy.get('#search-box').type('Italia');
    cy.get('tbody > :nth-child(1) > .ng-binding').should('contain', 'IT');
    cy.get('tbody > :nth-child(2) > .ng-binding').should('contain', 'ITA');
    cy.get(':nth-child(3) > td').should('contain', 'EUR');
    cy.get(':nth-child(4) > td').should('contain', '39');
    cy.get(':nth-child(5) > td').should('contain', 'ita');
    cy.wait(1000);
    console.log('Pesquisa para Itália concluída com sucesso!');

})

Cypress.Commands.add('campoPesquisaIsrael', () => {
    console.log('Iniciando pesquisa para Israel...');
    cy.get('#search-box').type('Israel');
    cy.get('tbody > :nth-child(1) > .ng-binding').should('contain', 'IL');
    cy.get('tbody > :nth-child(2) > .ng-binding').should('contain', 'ISR');
    cy.get(':nth-child(3) > td').should('contain', 'ILS');
    cy.get(':nth-child(4) > td').should('contain', '972');
    cy.get(':nth-child(5) > td').should('contain', 'araheb');
    cy.wait(1000);
    console.log('Pesquisa para Israel concluída com sucesso!');

})