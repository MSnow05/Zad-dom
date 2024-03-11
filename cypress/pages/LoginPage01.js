class LoginPage {
    visit() {
        cy.visit('https://www.edu.goit.global/account/login');
    }

    logInUser(email, password) {
        cy.get('input[name="email"]').type(email);
        cy.get('input[name="password"]').type(password);
        cy.get('button[type="submit"]').click();
    }

    negative() {
        cy.get('input[name="email"]').should('not.exist');
        cy.get('input[name="password"]').should('not.exist');
        cy.get('button[type="submit"]').should('not.exist');
    }
}

export default LoginPage;