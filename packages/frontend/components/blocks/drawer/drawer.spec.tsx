import { Drawer } from '@blocks/drawer/drawer';

describe('<Drawer> tests', () => {
  it('should render in default state', () => {
    cy.mount(
      <Drawer onClose={cy.stub()}>
        <span data-testid="test-child" />
      </Drawer>
    );

    cy.getByTestId('drawer')
      .should('exist')
      .should('have.attr', 'aria-hidden', 'true')
      .within(() => {
        cy.getByTestId('test-child').should('not.exist');
      });
  });

  it('should render in open state - right to left (default)', () => {
    cy.mount(
      <Drawer onClose={cy.stub()} isOpen>
        <span data-testid="test-child" />
      </Drawer>
    );

    cy.getByTestId('drawer').should('exist').should('have.attr', 'aria-hidden', 'false');
    cy.getByTestId('drawer').should('have.data', 'direction', 'left');
  });

  it('should render in open state - left to right', () => {
    cy.mount(
      <Drawer onClose={cy.stub()} isOpen direction="right">
        <span data-testid="test-child" />
      </Drawer>
    );

    cy.getByTestId('drawer').should('exist').should('have.attr', 'aria-hidden', 'false');
    cy.getByTestId('drawer').should('have.data', 'direction', 'right');
  });

  it('should invoke onClose event when clicked outside', () => {
    const mockOnClose = cy.stub();

    cy.mount(
      <Drawer onClose={mockOnClose} isOpen>
        <span data-testid="test-child" />
      </Drawer>
    );

    cy.get('body').click(5, 5);
    cy.wrap(mockOnClose).should('have.been.calledOnce');
  });

  it('should add custom classname to html element', () => {
    cy.mount(
      <Drawer onClose={cy.stub()}>
        <span data-testid="test-child" />
      </Drawer>
    );
    cy.getByTestId('drawer').should('not.have.class', 'saturate-50');

    cy.mount(
      <Drawer onClose={cy.stub()} className="saturate-50">
        <span data-testid="test-child" />
      </Drawer>
    );
    cy.getByTestId('drawer').should('have.class', 'saturate-50');
  });

  it('should add custom test-id to html element', () => {
    cy.mount(
      <Drawer onClose={cy.stub()} testId="custom-testid">
        <span data-testid="test-child" />
      </Drawer>
    );
    cy.getByTestId('custom-testid').should('exist');
  });

  it('should add custom id to html element', () => {
    cy.mount(
      <Drawer onClose={cy.stub()}>
        <span data-testid="test-child" />
      </Drawer>
    );

    cy.getByTestId('drawer').should('not.have.attr', 'id');

    cy.mount(
      <Drawer onClose={cy.stub()} id="testId">
        <span data-testid="test-child" />
      </Drawer>
    );

    cy.getByTestId('drawer').should('have.attr', 'id', 'testId');
  });
});
