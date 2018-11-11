describe('NavbarNavigation', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/');
        cy.get('#emailInput')
            .type('test@email.com');

        cy.get('#passwordInput')
            .type('test123');

        cy.get('.btn-success').click();
    });

    afterEach(() => {
        cy.get('.btn-danger').click();
    });

    it('Should start at Home Page with App Title', () => {
        cy.get('.navbar-title').contains('SetFree');
        cy.get('.home-title').contains('Home Page');
    });

    it('should navigate to Home Screen', () => {
        cy.get('.home-route').click();

        cy.get('.home-title').contains('Home Page');
    });

    it('should navigate to Score Screen', () => {
        cy.get('.score-route').click();

        cy.url().should('include', '/score');
        cy.get('.score-title').contains('Score Page');
    });

    it('should navigate to Profile Screen', () => {
        cy.get('.profile-route').click();

        cy.url().should('include', '/profile');
        cy.get('.profile-title').contains('Profile Page');
    });
});