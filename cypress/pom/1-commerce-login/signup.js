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
   //user information
    this.firstName = () => cy.xpath("//input[@name='first_name']");
    this.latName = () => cy.xpath("//input[@name='last_name']");
    this.companyName = () => cy.xpath("//input[@id='company']");
    this.address1 = () => cy.xpath("//input[@id='address1']");
    this.address2 = () => cy.xpath("//input[@id='address2']");
    this.country = () => cy.xpath("//select[@id='country']");
    this.state = () => cy.xpath("//input[@name='state']");
    this.city = () => cy.xpath("//input[@name='city']");
    this.zipCode = () => cy.xpath("//input[@name='zipcode']");
    this.mobileNumber = () => cy.xpath("//input[@name='mobile_number']");
    this.createAccountBtn = () => cy.xpath("//button[@type='submit' and contains(text(), 'Create Account')]");
    this.continueBtn = () => cy.get('[data-qa="continue-button"]')
    };
    //sign up function
    signUp(userName, useremail, userDay, userMonth, userYear, userPassword, firstName, lastName, companyName, address1, address2, country, state, city, zipCode, mobileNumber) {
        cy.visit(`${Cypress.env("baseUrl")}/login`);
        this.userName().type(userName);
        this.userEmail().type(useremail);
        this.clickBtn().click();
        this.userGender().click();
        this.userDay().select(userDay).should('have.value', `${userDay}`);
        this.userMonth().select(userMonth).should('have.value', `${userMonth}`);
        this.userYear().select(userYear).should('have.value', `${userYear}`);
        this.userPassword().type(userPassword)
        this.firstName().type(firstName);
        this.latName().type(lastName);
        this.companyName().type(companyName);
        this.address1().type(address1);
        this.address2().type(address2);
        this.country().select(country).should('have.value', `${country}`);
        this.state().type(state);
        this.city().type(city);
        this.zipCode().type(zipCode);
        this.mobileNumber().type(mobileNumber);
        this.createAccountBtn().click();
        cy.url().should("include", "account_created");
        cy.get('b').should('have.text', 'Account Created!'); // Verify account creation message
        this.continueBtn().click();
  
    }
}

export default automationSignup;
