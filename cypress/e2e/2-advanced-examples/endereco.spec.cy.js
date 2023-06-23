///<reference types="cypress"/>
const perfil = require('../2-advanced-examples/perfil.json')

context('Funcionalidade login',()=>{

    beforeEach(() =>{
        cy.visit('minha-conta')
        cy.fixture('perfil.json').then(dados =>{
            cy.login(dados.usuario, dados.senha)
    

        })


    });

    it('Deve fazer cadastro de faturamento com sucesso', () => {
        
        
    });
})
