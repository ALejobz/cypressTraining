class homePage{

    constructor(){
        this.url = "https://ecommerce-playground.lambdatest.io/"
    }
    element = {
        homeButton: ()=> cy.get(".title").contains("Home"),
        loginButton: ()=> cy.get(".title").contains("login"),
    }
    visit(){
        cy.visit(this.url);
    }
    verifyHomePageLoads(){
        this.element.homeButton().should("be.visible")
    }
}
module.exports = new homePage();