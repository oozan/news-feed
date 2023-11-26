import { MobileNavigationItem } from '@blocks/mobile-navigation/mobile-navigation.item';
import { IconName } from '@elements/icon/icon';

describe('<MobileNavigationItem> tests', () => {
  const linkText = 'MobileNavigationItem test';
  const linkUrl = '/test-url';

  it('should render in default state', () => {
    cy.mount(<MobileNavigationItem url={linkUrl}>{linkText}</MobileNavigationItem>);

    cy.getByTestId('mobile-navigation-link').should('exist');
    cy.getByTestId('mobile-navigation-link').should('have.text', linkText);
    cy.getByTestId('mobile-navigation-link').should('have.attr', 'href', linkUrl);
  });

  it('should render optional icon', () => {
    cy.mount(
      <MobileNavigationItem iconName={IconName.home} url={linkUrl}>
        {linkText}
      </MobileNavigationItem>
    );

    cy.getByTestId('mobile-navigation-link-icon').should('exist');
  });
});
