/// <reference types="cypress"/>

describe('Criando cenário de teste para o site globalsqa', () => {

  it('Caso de teste: Registrando um usuário com falha (faltando senha)', () => {
    cy.visit('https://www.globalsqa.com/angularJs-protractor/registration-login-example/#/register')
    cy.get('#firstName').type('inatel')
    cy.get('#Text1').type('inatel')
    cy.get('#username').type('inatel')
    cy.get('#password').type('inatel')
    cy.get('#password')
    cy.get('.btn-primary').click()
    cy.get('.ng-binding').should('contain.text', 'Registration successful')
  })
  
  it('Caso de teste: Realizando login com sucesso', () => {
    let info = criarUsuario() 
    cy.get('#username').type(info[0])
    cy.get('#password').type(info[1])
    cy.get('.btn-primary').click()
    cy.get('h1.ng-binding').should('contain.text', info[0])
  })
  
})

function criarUsuario(){
  let horas = new Date().getHours().toString(); 
  let minutos = new Date().getMinutes().toString(); 
  let seg = new Date().getSeconds().toString()
  let user = horas + minutos + seg + 'Id'
  let senha = horas + minutos +seg + 'senha'
  let userInfo = [user, senha]
  cy.visit('https://www.globalsqa.com/angularJs-protractor/registration-login-example/#/login')
  cy.get('.btn-link').click()
  cy.get('#firstName').type(user)
  cy.get('#Text1').type(user)
  cy.get('#username').type(user)
  cy.get('#password').type(senha)
  cy.get('.btn-primary').click()
  cy.get('.ng-binding').should('contain.text', 'Registration successful')
  return userInfo
}
