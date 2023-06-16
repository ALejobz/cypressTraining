
describe('template spec', () => {

  const poke = 'pikachu'
  const tipe = 'electric'

  it('passes', () => {
    cy.request('GET','https://pokeapi.co/api/v2/pokemon/pikachu')
    .its('status').should('equal',200)
  })

  it('passes', () => {
    cy.request({method:"GET", url:"https://pokeapi.co/api/v2/pokemon/beltran",failOnStatusCode:false })
    .its('status').should('equal', 404)
  })

  it('passes', () => {
    cy.request({method:"GET", url:"https://pokeapi.co/api/v2/pokemon/pikachu",failOnStatusCode:false })
    .its('body.name').should('equal', poke)
  })

  it('passes', () => {
    cy.request('GET', 'https://pokeapi.co/api/v2/pokemon/'+poke)
    .its('body.types[0].type.name').should('equal',tipe)  
  })

  it('passes', () => {
    cy.request({method:"GET", url:"https://pokeapi.co/api/v2/pokemon/"+poke,failOnStatusCode:false }).then(
      (response)=>{
      expect(response.body).to.have.property('name',poke),
      expect(response.body.types[0].type).to.have.property('name',tipe)
      })
  })
})