const homePage = require("../../cypress/page-objects/home-page")
const loginPage = require("../../cypress/page-objects/login-page")

describe('LAMBDATEST test', () => {
  it('Home page loads', () => {
    homePage.visit();
    homePage.verifyHomePageLoads();
  })

  it("login failed - user doesn't exist",()=>{
    loginPage.visit();
    cy.fixture('loginTSData').then((data)=>{
        loginPage.loginUser(data.tc1_loginerror.email,data.tc1_loginerror.password);
    })
    loginPage.verifyLoginErrorMessage();
  })

  it("login success - user login",()=>{
    loginPage.visit();
    cy.fixture('loginTSData').then((data)=>{
        cy.intercept(data.tc2_loginsuccessfull.method, data.tc2_loginsuccessfull.endpoint).as("afterLogin")
        loginPage.loginUser(data.tc2_loginsuccessfull.email, data.tc2_loginsuccessfull.password)
        cy.wait("@afterLogin").its("response.statusCode").should("eq",200);
    })
    loginPage.verifyAccountLogin();
  })

  it("Login failed - user blocked",()=>{
    loginPage.visit();
    cy.fixture('loginTSData').then((data)=>{
        loginPage.loginUser(data.tc3_loginerror.email, data.tc3_loginerror.password)
        loginPage.loginUser(data.tc3_loginerror.email, data.tc3_loginerror.password)
        loginPage.loginUser(data.tc3_loginerror.email, data.tc3_loginerror.password)
        loginPage.loginUser(data.tc3_loginerror.email, data.tc3_loginerror.password)
    })
    loginPage.verifyBlockedLoginErrorMessage();
  })
})