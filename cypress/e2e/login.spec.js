/// <reference types="cypress" />

context('Funcionalidade login', () =>{

    it('Deve fazer login com sucesso', () =>{
    cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    })

    it('Deve exibir uma mensagem de erro ao incerir usuario ou senha invalidos', () => {

    })
})