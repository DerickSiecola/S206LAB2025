/// <reference = cypress>

describe("Testes de JSAlert e login", ()=>{
  it("Teste de JSAlert com sucesso", ()=>{
    cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
    cy.get(':nth-child(1) > button').click()
    cy.get('#result').should("contain.text", "You successfully clicked an alert")

  })

  it("Teste de Login com sucesso", ()=>{
    cy.visit('https://the-internet.herokuapp.com/login')
    cy.get('#username').type('tomsmith')
    cy.get('#password').type('SuperSecretPassword!')
    cy.get('.fa').click()
    cy.get('#flash').should("contain.text", "You logged into a secure area!")
  })

  it("Teste de Login com falha", ()=>{
    let infos = criarUser()
    cy.visit('https://the-internet.herokuapp.com/login')
    cy.get('#username').type(infos[0])
    cy.get('#password').type(infos[1])
    cy.get('.fa').click()
  })
})

function criarUser(){
  let hora = new Date().getHours().toString()
  let minuto = new Date().getMinutes().toString()
  let segundo = new Date().getSeconds().toString()
  let ID = hora + minuto + segundo + "ID"
  let Senha = hora + minuto + segundo + "Senha"
  let infos = [ID, Senha]

  cy.visit('https://the-internet.herokuapp.com/login')
  cy.get('#username').type(ID)
  cy.get('#password').type(Senha)
  cy.get('.fa').click()
  cy.get('#flash').should("contain.text", "Your username is invalid!")

  return infos

}