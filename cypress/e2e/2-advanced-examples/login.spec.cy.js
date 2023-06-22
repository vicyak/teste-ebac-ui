///<reference types="cypress"/>

context('Funcionalidade login',()=>{
    it('Deve fazer login com sucesso',() =>{
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
        cy.get('#username').type('aluno_ebac@teste.com')
        cy.get('#password').type('teste@teste.com')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.page-title').should('contain', 'Minha conta')
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá,')
    })

    it('Mensagem de erro ao inserir usuario invalidos',() =>{
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
        cy.get('#username').type('aluno_eba@teste.com')
        cy.get('#password').type('teste@teste.com')
        cy.get('.woocommerce-form > .button').click()  

        cy.get('.woocommerce-error').should('contain', 'Endereço de e-mail')
    })

    it.only('Mensagem de erro ao inserir senha invalida',() =>{
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
        cy.get('#username').type('aluno_ebac@teste.com')
        cy.get('#password').type('teste@teste.c')
        cy.get('.woocommerce-form > .button').click()  

        cy.get('.woocommerce-error').should('contain', 'senha')

    })
})