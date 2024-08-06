import assert from 'assert'

class RegisterForm {
  
  typeTitle(text) {
    if (!text) return;
    this.elements.titleInput().type(text)
  }

  typeUrl(text) {
    if (!text) return;
    this.elements.imageUrlInput().type(text)
  }
  clickSubmit() {
    this.elements.submitBtn().click()
  }
}
const registerForm = new RegisterForm()
const colors = {
  errors: 'rgb(220, 53, 69)',
  success: ''
}
describe('Validar produtos no carrinho', () => {
  beforeEach(() => {
    cy.visit('https://advantageonlineshopping.com/#/')
    

})
  
  it('que acesso site de compras', () => {
    cy.get('#menuUserSVGPath').click()
    cy.get('[a-hint="Username"] > .inputContainer > .ng-pristine').type('ReinaldoJR')
    cy.get('[a-hint="Password"] > .inputContainer > .ng-pristine').type('Junior010496')
    cy.get('button[type="button"]').click()

  })

  it('usuário incluir produtos no carrinho', () => {
    cy.get('#details_16').click()
    cy.get('.fixedBtn > .roboto-medium').click()
    cy.get('.pages > .ng-scope').click()
    cy.get('#details_10').click()
    cy.get('.fixedBtn > .roboto-medium').click()
    cy.get('.pages > .ng-scope').click()
    cy.get('#menuCart').click()
    cy.get('#menuCart').click()

  it('usuário deve validar se o sistema adicionou corretamente os itens', () => {
      cy.get('tbody > :nth-child(1) > :nth-child(2) > .roboto-regular').should('HP CHROMEBOOK 14 G1')
      cy.get(':nth-child(2) > :nth-child(2) > .roboto-regular').should('HP ELITEPAD 1000 G2 TABLET')
    
    })
  })
})