///<reference types="cypress"/>
const perfil = require('../2-advanced-examples/perfil.json')
context('Funcionalidade login',()=>{

    beforeEach(() =>{
        cy.visit('minha-conta/')


    });

    afterEach(()=>{
        cy.screenshot()

    });

    it('Deve fazer login com sucesso',() =>{
        cy.get('#username').type('aluno_ebac@teste.com')
        cy.get('#password').type('teste@teste.com')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.page-title').should('contain', 'Minha conta')
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá,')
    })

    it('Mensagem de erro ao inserir usuario invalidos',() =>{
        cy.get('#username').type('aluno_eba@teste.com')
        cy.get('#password').type('teste@teste.com')
        cy.get('.woocommerce-form > .button').click()  

        cy.get('.woocommerce-error').should('contain', 'Endereço de e-mail')
    })

    it('Mensagem de erro ao inserir senha invalida',() =>{
        cy.get('#username').type('aluno_ebac@teste.com')
        cy.get('#password').type('teste@teste.c')
        cy.get('.woocommerce-form > .button').click()  

        cy.get('.woocommerce-error').should('contain', 'senha')

    })

    it('Deve fazer login com sucesso- Usando arquivo de dados',() =>{
        cy.get('#username').type(perfil.usuario)
        cy.get('#password').type(perfil.senha)
        cy.get('.woocommerce-form > .button').click()

        cy.get('.page-title').should('contain', 'Minha conta')
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá,')
    })
    it.only('Deve fazer login com sucesso- Usando fixture',() =>{
        
        cy.fixture('../perfil.json').then(dados => {

       
        cy.get('#username').type(dados.usuario)
        cy.get('#password').type(dados.senha)
        cy.get('.woocommerce-form > .button').click()

        cy.get('.page-title').should('contain', 'Minha conta')
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá,')
    })
    })
})