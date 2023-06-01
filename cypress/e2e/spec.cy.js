describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
  })
})

describe('DemoBlaze test', () => {
  it('enter DemoBlaze', () => {
    cy.visit('')
  })
  
  it('Login into DemoBlaze', ()=>{
      cy.visit('/prod.html?idp_=2')
  })
})