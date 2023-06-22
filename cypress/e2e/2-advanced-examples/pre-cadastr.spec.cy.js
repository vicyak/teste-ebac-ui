///<reference types="cypress"/>
var faker = require('faker');


describe('Funcionalidade Pre Cadastro',()=>{

    beforeEach(() =>{
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')


    });

    
    
    it('Deve completar o pre cadastro com sucesso', () => {
        cy.get('#reg_email').type(faker.internet.email())
        cy.get('#reg_password').type('!teste@dolar')
        cy.get(':nth-child(4) > .button').click()

        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
        cy.get('#account_first_name').type('VIctor')
        cy.get('#account_last_name').type('teste')
        cy.get('.woocommerce-Button').click()

        cy.get('.woocommerce-message').should('contain', 'sucesso')
    });

});


