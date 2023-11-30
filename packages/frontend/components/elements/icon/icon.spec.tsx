import { Icon, IconName } from './icon';

describe('<Icon> tests', () => {
  it('should render with correct type element', () => {
    cy.mount(<Icon icon={IconName.arrowRight} />);

    cy.getByTestId('icon-arrow-right').should('exist');
    cy.getByTestId('icon-arrow-right').should('have.prop', 'tagName').should('equal', 'svg');

    cy.mount(<Icon icon={IconName.arrowDown} />);
    cy.getByTestId('icon-arrow-down').should('exist');
  });

  it('should add custom classname to type element', () => {
    cy.mount(<Icon icon={IconName.arrowRight} />);
    cy.getByTestId('icon-arrow-right').should('not.have.class', 'text-carnation');

    cy.mount(<Icon icon={IconName.arrowRight} className="text-carnation" />);
    cy.getByTestId('icon-arrow-right').should('have.class', 'text-carnation');
  });
});
