import { Sidebar } from '@layouts/sidebar/sidebar';

describe('<Sidebar> tests', () => {
  beforeEach(() => {
    cy.viewport('desktop');
  });

  it('should render in default state', () => {
    cy.mount(<Sidebar />);

    cy.getByTestId('sidebar').should('exist').should('have.prop', 'tagName').should('eq', 'ASIDE');
    cy.getByTestId('sidebar-logo').should('exist');
  });

  it('should not render in mobile viewport', () => {
    cy.viewport('mobile');
    cy.mount(<Sidebar />);
    cy.getByTestId('sidebar').should('not.exist');
  });

  it('should add custom classname to html element', () => {
    cy.mount(<Sidebar />);
    cy.getByTestId('sidebar').should('not.have.class', 'bg-downy');

    cy.mount(<Sidebar className="bg-downy" />);
    cy.getByTestId('sidebar').should('have.class', 'bg-downy');
  });

  it('should add custom test-id to html element', () => {
    const mockTestId = 'custom-testid';

    cy.mount(<Sidebar testId={mockTestId} />);
    cy.getByTestId(mockTestId).should('exist');
  });
});
