class automationSignup {
  constructor() {
    this.userName = () => cy.xpath("//input[@placeholder='Name']");
    this.userEmail = () => cy.xpath("(//input[@data-qa='signup-email'])[1]");
    this.clickBtn = () => cy.xpath("//button[@type='submit' and contains(text(), 'Signup')]")
    this.userGender = () => cy.get("#id_gender1");
    this.userDay = () => cy.get('[data-qa="days"]');
    this.userMonth = () => cy.get('[data-qa="months"]');
    this.userYear = () => cy.get('[data-qa="years"]');
    this.userPassword = () => cy.xpath("//input[@type='password']")

    };
    signUp(userName, useremail, userDay, userMonth, userYear, userPassword) {
        cy.visit(`${Cypress.env("baseUrl")}/login`);
        this.userName().type(userName);
        this.userEmail().type(useremail);
        this.clickBtn().click();
        this.userGender().click();
        this.userDay().select(userDay).should('have.value', '1');
        this.userMonth().select(userMonth).should('have.value', '1');
        this.userYear().select(userYear).should('have.value', `${userYear}`);
        this.userPassword().type(userPassword)
    }
}

export default automationSignup;
