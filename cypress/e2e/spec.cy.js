describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
  })
})

describe('DemoBlaze test', () => {
  it('enter DemoBlaze', () => {
    cy.visit('')
    cy.get('#login2').click()
  })
})