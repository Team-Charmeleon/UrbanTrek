describe('Sucessful page rendering', () => {
  it('finds the header on signup page', () => {
    cy.visit('http://localhost:5173/signup');

    cy.contains('Create an account');
  });
  it('clicks the log in button', () => {
    cy.visit('http://localhost:5173/signup');

    cy.contains('Log In').click();

    // should be a new url which includes '/login'
    cy.url().should('include', '/login');
  });
  it('finds the header on login page', () => {
    cy.visit('http://localhost:5173/login');

    cy.contains('Log in');
  });
  it('finds the header on favorites page', () => {
    cy.visit('http://localhost:5173/favorites');

    cy.contains('Favorites');
  });
});
