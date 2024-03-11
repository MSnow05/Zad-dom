class HomePage {
    goToCourseHomepage() {
        cy.get('[id="go-to-course-homepage-widget"]').scrollIntoView().should("be.visible").wait(5000);
    }
    proceedToNext() {   
    cy.get('button[class="next-7afvtf e1phyiqy6"]').click().wait(5000);
    }

    logOut() {
        cy.contains('Sign Out').click();
    }
}

export default HomePage;