import { MobileNavigation } from '@blocks/mobile-navigation/mobile-navigation';

describe('<MobileNavigation> tests', () => {
  it('should render in default state', () => {
    cy.viewport('mobile');
    cy.mount(<MobileNavigation />);

    cy.getByTestId('mobile-navigation').should('exist');
  });

  it('should not render in desktop viewport', () => {
    cy.viewport('desktop');
    cy.mount(<MobileNavigation />);

    cy.getByTestId('mobile-navigation').should('not.exist');
  });
});
