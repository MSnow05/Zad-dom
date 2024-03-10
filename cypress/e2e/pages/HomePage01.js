class HomePage {
    goToCourseHomepage() {
        cy.get('[id="go-to-course"]').scrollIntoView().should("be.visible").wait(5000);
        cy.get('button[class="course-btn"]').click().wait(5000);
    }

    logOut() {
        cy.contains('Sign Out').click();
    }
}

export default HomePage;