import automationSignup from "../../pom/1-commerce-login/signup"

describe('Signup To the Automation Exercies', () => { 

    const userSignup = new automationSignup()
    it("Launch Browser && Verify that home page is visible successfully", () => {

        //random email 
        const randomEmail = `users${Math.floor(Math.random()*1000)}@gmail.com`
        userSignup.signUp("text", randomEmail, "1", "January", "1998", '12345678')
    
    })
 })