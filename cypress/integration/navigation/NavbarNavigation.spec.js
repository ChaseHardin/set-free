describe('NavbarNavigation', () => {
    it('Should start at Home Page with App Title', () => {
        cy.visit('http://localhost:3000/');

        cy.get('.navbar-title').contains('SetFree');
        cy.get('.home-title').contains('Home Page');
    });

    it('should navigate to Home Screen', () => {
        cy.visit('http://localhost:3000/profile');

        cy.get('.home-route').click();

        cy.get('.home-title').contains('Home Page');
    });

    it('should navigate to Score Screen', () => {
        cy.visit('http://localhost:3000/');

        cy.get('.score-route').click();

        cy.url().should('include', '/score');
        cy.get('.score-title').contains('Score Page');
    });

    it('should navigate to Profile Screen', () => {
        cy.visit('http://localhost:3000/');

        cy.get('.profile-route').click();

        cy.url().should('include', '/profile');
        cy.get('.profile-title').contains('Profile Page');
    });
});