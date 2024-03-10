class LoginPage {
    constructor() {
        this.emailInput = 'input[name="email"]';
        this.passwordInput = 'input[name="password"]';
        this.submitButton = 'button[type="submit"]';
    }
    visit() {
        cy.visit('https://www.edu.goit.global/account/login');
    }

    logInUser(email, password) {
        cy.get('input[name="email"]').type(email);
        cy.get('input[name="password"]').type(password);
        cy.get('button[type="submit"]').click();
    }
    negative() {
        cy.get(this.emailInput).should('not.exist');
        cy.get(this.passwordInput).should('not.exist');
        cy.get(this.submitButton).should('not.exist');
    }

    }

export default LoginPage;