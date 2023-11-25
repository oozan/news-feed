import { DesktopNavigationItem } from '@blocks/desktop-navigation/desktop-navigation.item';
import { IconName } from '@elements/icon/icon';

describe('<DesktopNavigationItem> tests', () => {
  const linkText = 'DesktopNavigationItem test';
  const linkUrl = '/test-url';

  it('should render in default state', () => {
    cy.mount(
      <DesktopNavigationItem url={linkUrl} iconName={IconName.home}>
        {linkText}
      </DesktopNavigationItem>
    );

    cy.getByTestId('desktop-navigation-link').should('exist');
    cy.getByTestId('desktop-navigation-link').should('have.text', linkText);
    cy.getByTestId('desktop-navigation-link').should('have.attr', 'href', linkUrl);
  });

  it('should render optional icon', () => {
    cy.mount(
      <DesktopNavigationItem iconName={IconName.home} url={linkUrl}>
        {linkText}
      </DesktopNavigationItem>
    );

    cy.getByTestId('desktop-navigation-link-icon').should('exist');
  });
});
