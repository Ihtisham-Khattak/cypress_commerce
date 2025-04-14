import automationLogin from "../../pom/1-commerce-login/login";

describe("Automation Exercise", () => {
  const login = new automationLogin();

  it("Launch Browser && Verify that home page is visible successfully", () => {
    login.launchBrowser();
    cy.get(".active > :nth-child(1) > h1").should(
      "have.text",
      "AutomationExercise"
    );
  });

  it.only("Verify that home page is visible successfully", () => {
    login.launchBrowser();
    login.loginFunctionality("users43@gmail.com", "12RTY@");
    cy.get(".login-form > form > p")
      .should("be.visible")
      .and("have.text", "Your email or password is incorrect!");
  });
});
