describe('template spec', () => {

  beforeEach(() => {
    cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
  });
  
  


  it('passes', () => {
    cy.get('#username') .type('aluno_ebac@teste.com')
    cy.get('#password') .type('teste@teste.com')
    cy.get('.woocommerce-form > .button') .click()

    cy.get('.page-title') .should('contain' , 'Minha conta')
  })

    it('Deve exibir uma mensagem de erro ao incerir usuario ou senha invalidos', () => {
    cy.get('#username') .type('ebac@teste.com')
    cy.get('#password') .type('teste@teste.com')
    cy.get('.woocommerce-form > .button') .click()
    })

    
    it('Deve exibir uma mensagem de erro ao incerir usuario ou senha invalidos', () => {
      cy.get('#username') .type('aluno_ebac@teste.com')
      cy.get('#password') .type('teste@teste')
      cy.get('.woocommerce-form > .button') .click()
      })
})

