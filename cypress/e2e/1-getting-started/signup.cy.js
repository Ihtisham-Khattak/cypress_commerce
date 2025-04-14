import automationSignup from "../../pom/1-commerce-login/signup";

describe("Signup To the Automation Exercies", () => {
  beforeEach(function () {
    cy.fixture("example.json").then((data) => {
      this.data = data;
    });
  });

  const userSignup = new automationSignup();
  it("Launch Browser && Verify that home page is visible successfully", function () {
    //random email
    const randomEmail = `users${Math.floor(Math.random() * 1000)}@gmail.com`;
    userSignup.signUp(
      this.data.name,
      randomEmail,
      this.data.day,
      this.data.month,
      this.data.year,
      this.data.password,
      this.data.firstName,
      this.data.lastName,
      this.data.companyName,
      this.data.address1,
      this.data.address2,
      this.data.country,
      this.data.state,
      this.data.city,
      this.data.zipCode,
      this.data.mobileNumber
    );
  });
});
