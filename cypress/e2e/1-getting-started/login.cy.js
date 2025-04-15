import automationLogin from "../../pom/1-commerce-login/login";

describe("Automation Exercise", function () {
  const login = new automationLogin();

  beforeEach(function () {
    cy.fixture("example.json").then((data) => {
      this.data = data;
    });
  });

  it("Launch Browser && Verify that home page is visible successfully", () => {
    login.launchBrowser();
    cy.get(".active > :nth-child(1) > h1").should(
      "have.text",
      "AutomationExercise"
    );
  });
  //Login with correct credentials
  it("Verify that home page is visible successfully", function () {
    login.launchBrowser();
    login.loginFunctionality("users43@gmail.com", this.data.password);
    cy.get('.active > :nth-child(1) > h1')
      .should("be.visible")
      .and("have.text", "AutomationExercise");
  });
  //Login with incorrect credentials
  it("Verify that incorrect message visible successfully", function () {
    login.launchBrowser();
    login.loginFunctionality("users4@gmail.com", this.data.password);
    cy.get('.login-form > form > p')
      .should("be.visible")
      .and("have.text", "Your email or password is incorrect!");
  });
   //Logout the user from automation exercise
   it.only("Verify that user logout successfully", function () {
    login.launchBrowser();
    login.loginFunctionality("users43@gmail.com", this.data.password);
    cy.get('.active > :nth-child(1) > h1')
      .should("be.visible")
      .and("have.text", "AutomationExercise");
      cy.get('.shop-menu > .nav > :nth-child(5) > a').click();
      cy.get('b').should('have.text', 'ACCOUNT DELETED!'); // Verify logout message
      cy.get('[data-qa="continue-button"]').click()
  });
});
