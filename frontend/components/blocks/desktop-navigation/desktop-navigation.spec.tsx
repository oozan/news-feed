import { DesktopNavigation } from '@blocks/desktop-navigation/desktop-navigation';

describe('<DesktopNavigation> tests', () => {
  it('should render in default state', () => {
    cy.viewport('desktop');
    cy.mount(<DesktopNavigation />);

    cy.getByTestId('desktop-navigation').should('exist');
  });

  it('should not render in mobile viewport', () => {
    cy.viewport('mobile');
    cy.mount(<DesktopNavigation />);

    cy.getByTestId('desktop-navigation').should('not.exist');
  });
});
