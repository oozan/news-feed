describe('<Layout> tests', () => {
  it('should render in default state in mobile viewport', () => {
    cy.viewport('mobile');

    cy.getByTestId('test-layout').should('exist');
    cy.getByTestId('header').should('exist');
    cy.getByTestId('mobile-navigation').should('exist');
    cy.getByTestId('main')
      .should('exist')
      .within(() => {
        cy.getByTestId('test-child').should('exist');
      });
  });

  it('should render in default state in desktop viewport', () => {
    cy.viewport('desktop');

    cy.getByTestId('test-layout').should('exist');
    cy.getByTestId('header').should('exist');
    cy.getByTestId('sidebar').should('exist');
    cy.getByTestId('main')
      .should('exist')
      .within(() => {
        cy.getByTestId('test-child').should('exist');
      });
  });
});
