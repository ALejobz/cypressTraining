describe('template spec', () => {
  it('Assertion 1', () => {
    cy.visit('')
    cy.get('#navbarExample > ul').should('contain', 'Cart')
  })

  it('Assertion 2', () => {
    cy.visit('')
    cy.get('#navbarExample > ul').find('li').should('have.length', 8)
  })

  it('Assertion 3', () => {
    cy.visit('')
    cy.get('#itemc').click()
    cy.get(':nth-child(7) > .card > .card-block > .card-title > .hrefch').click()
    cy.get('#tbodyid > div.row > div > a').should('have.text','Add to cart')
  })
})