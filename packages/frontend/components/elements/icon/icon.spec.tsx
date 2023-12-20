import { Icon, IconName } from './icon';

describe('<Icon> tests', () => {
  it('should render with correct type element', () => {
    cy.mount(<Icon icon={IconName.news} />);

    cy.getByTestId('icon-arrow-right').should('exist');
    cy.getByTestId('icon-arrow-right').should('have.prop', 'tagName').should('equal', 'svg');

    cy.mount(<Icon icon={IconName.home} />);
    cy.getByTestId('icon-arrow-down').should('exist');
  });

  it('should add custom classname to type element', () => {
    cy.mount(<Icon icon={IconName.news} />);
    cy.getByTestId('icon-arrow-right').should('not.have.class', 'text-carnation');

    // eslint-disable-next-line tailwindcss/no-custom-classname
    cy.mount(<Icon icon={IconName.home} className="text-carnation" />);
    cy.getByTestId('icon-arrow-right').should('have.class', 'text-carnation');
  });
});
