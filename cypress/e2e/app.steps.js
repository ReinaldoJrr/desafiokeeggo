import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

// Passo Given
Given('que acesso site de compras', () => {
  cy.visit('https://advantageonlineshopping.com/#/');
});

// Passo When para login
When('usuário incluir produtos no carrinho', () => {
  cy.get('#menuUserSVGPath').click();
  cy.get('[a-hint="Username"] > .inputContainer > .ng-pristine').type('ReinaldoJR');
  cy.get('[a-hint="Password"] > .inputContainer > .ng-pristine').type('Junior010496');
  cy.get('button[type="button"]').click();
});

// Passo When para adicionar produtos ao carrinho
When('usuário incluir produtos no carrinho', () => {
  cy.get('#details_16').click();
  cy.get('.fixedBtn > .roboto-medium').click();
  cy.get('.pages > .ng-scope').click();
  cy.get('#details_10').click();
  cy.get('.fixedBtn > .roboto-medium').click();
  cy.get('.pages > .ng-scope').click();
  cy.get('#menuCart').click();
});

// Passo Then para verificar produtos no carrinho
Then('usuário deve validar se o sistema adicionou corretamente os itens', () => {
  cy.get('tbody > :nth-child(1) > :nth-child(2) > .roboto-regular').should('contain.text', 'HP CHROMEBOOK 14 G1');
  cy.get(':nth-child(2) > :nth-child(2) > .roboto-regular').should('contain.text', 'HP ELITEPAD 1000 G2 TABLET');
});