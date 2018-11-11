describe('Login with Firebase', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/');
    });

    it('should prompt user to login', () => {
        cy.get('.login-container').contains('Email Address');
    });

    it('should hide the app contents when user is not logged in', () => {
        cy.get('.navbar-title').should('have.length', 0);
    });
});