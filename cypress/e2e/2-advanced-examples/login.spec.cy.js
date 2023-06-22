///<reference types="cypress"/>

context('Funcionalidade login',()=>{

    beforeEach(() =>{
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')


    });

    afterEach(()=>{
        cy.screenshot()

    })
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
})