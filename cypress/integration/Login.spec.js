describe('Login with Firebase', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/');
    });

    it('should prompt user to login', () => {
        cy.get('.login-container').contains('SetFree');
    });

    it('should hide the app contents when user is not logged in', () => {
        cy.get('.navbar-title').should('have.length', 0);
    });
});

describe('Logout with Firebase', () => {
    beforeEach('log user into application', () => {
        cy.visit('http://localhost:3000/');

        cy.get('#emailInput')
            .type('test@email.com');

        cy.get('#passwordInput')
            .type('test123');

        cy.get('.btn-success').click();
    })

    it('should logout of the application', () => {
        cy.visit('http://localhost:3000/profile');
        cy.get('.btn-danger').click();
        cy.wait(150);
        
        cy.get('.login-container').contains('SetFree');
    });
});