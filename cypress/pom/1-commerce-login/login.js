class automationLogin{

    constructor(){
        
        this.userName = () => cy.get('[data-qa="login-email"]')
        this.userPassword = () => cy.xpath("//input[@placeholder='Password']")
        this.userLogin = () => cy.xpath("//button[@type='submit' and contains(text(), 'Login')]")
    }

    launchBrowser(){
        cy.visit(Cypress.env("baseUrl"))
    }

    loginFunctionality(username, userpassword)
    {   cy.visit(`${Cypress.env("baseUrl")}/login`)
        this.userName().type(username)
        this.userPassword().type(userpassword)
        this.userLogin().click()
    }
}


export default automationLogin;
