class loginPage{
    constructor(){
        this.url="https://ecommerce-playground.lambdatest.io/index.php?route=account/login"
        this.loginErrorMessage="Warning: No match for E-Mail Address and/or Password."
        this.blockLoginErrorMessage="Warning: Your account has exceeded allowed number of login attempts. Please try again in 1 hour."
    }

    element = {
        loginEmailField: ()=> cy.get("#input-email"),
        loginPasswordField: ()=> cy.get("#input-password"),
        loginButton: ()=> cy.get("form > .btn"),
        errorMessage: ()=> cy.get("#account-login > .alert"),
        accountHeader: ()=> cy.get(".card-header").contains("My Account")
    }

    visit(){
        cy.visit(this.url);
    }

    typeLoginEmail(email){
        this.element.loginEmailField().clear().type(email);
    }

    typeLoginPassword(password){
        this.element.loginPasswordField().clear().type(password);
    }

    clickLoginButton(){
        this.element.loginButton().click();
    }

    verifyErrorMessage(message){
        this.element.errorMessage().should("be.visible").should("contain.text",message);
    }

    verifyLoginErrorMessage(){
        this.verifyErrorMessage(this.loginErrorMessage);
    }

    verifyBlockedLoginErrorMessage(){
        this.verifyErrorMessage(this.blockLoginErrorMessage);
    }

    loginUser(email,password){
        this.typeLoginEmail(email);
        this.typeLoginPassword(password);
        this.clickLoginButton();
    }

    verifyAccountLogin(){
        this.element.accountHeader().should("be.visible")
    }
}

module.exports = new loginPage();