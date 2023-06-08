describe('template spec', () => {
  it('Enter the cart', () => {
    cy.visit('')
    cy.get('#cartur').click()
  })

  it('Try to log in', () => {
      cy.visit('')
      cy.get('#login2').click()
      cy.get('#loginusername').type('alejo')
      cy.get('#loginpassword').type('alejo')
  })

  it('Select the monitors', () => {
    cy.visit('')
    cy.get('#itemc').click()
})
})