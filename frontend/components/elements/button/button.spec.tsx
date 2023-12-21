import { Button } from '@elements/button/button';

describe('<Button> tests', () => {
  const buttonText = 'Button test';

  it('should render in default state', () => {
    cy.mount(<Button>{buttonText}</Button>);

    cy.getByTestId('button-plain').should('exist').should('have.text', buttonText);
    cy.getByTestId('button-plain').should('have.attr', 'type', 'button');
    cy.getByTestId('button-plain').should('have.prop', 'tagName').should('equal', 'BUTTON');
  });

  it('should render with correct html element depending on passed url', () => {
    cy.mount(<Button url="/home">{buttonText}</Button>);

    cy.getByTestId('button-internal').should('exist').should('have.text', buttonText);
    cy.getByTestId('button-internal').should('have.prop', 'tagName').should('equal', 'A');

    cy.mount(<Button url="https://foo.bar">{buttonText}</Button>);

    cy.getByTestId('button-external').should('exist').should('have.text', buttonText);
    cy.getByTestId('button-external').should('have.prop', 'tagName').should('equal', 'A');
  });

  it('should add custom test-id to html element', () => {
    const mockTestId = 'custom-testid';

    cy.mount(<Button testId={mockTestId}>{buttonText}</Button>);
    cy.getByTestId(mockTestId).should('exist');

    cy.mount(
      <Button url="/home" testId={mockTestId}>
        {buttonText}
      </Button>
    );
    cy.getByTestId(mockTestId).should('exist');

    cy.mount(
      <Button url="https://foo.bar" testId={mockTestId}>
        {buttonText}
      </Button>
    );
    cy.getByTestId(mockTestId).should('exist');
  });

  it('should modify type attribute', () => {
    cy.mount(<Button>{buttonText}</Button>);
    cy.getByTestId('button-plain').should('have.attr', 'type', 'button');

    cy.mount(<Button type="submit">{buttonText}</Button>);
    cy.getByTestId('button-plain').should('have.attr', 'type', 'submit');
  });

  it('should add custom classname to html element', () => {
    cy.mount(<Button>{buttonText}</Button>);
    cy.getByTestId('button-plain').should('not.have.class', '!text-9xl');

    cy.mount(<Button className="!text-9xl">{buttonText}</Button>);
    cy.getByTestId('button-plain').should('have.class', '!text-9xl');
  });

  it('should add aria-expanded value to html element', () => {
    cy.mount(<Button>{buttonText}</Button>);
    cy.getByTestId('button-plain').should('not.have.attr', 'aria-expanded');

    cy.mount(<Button ariaExpanded={true}>{buttonText}</Button>);
    cy.getByTestId('button-plain').should('have.attr', 'aria-expanded', 'true');
  });

  it('should add aria-controls value to html element', () => {
    cy.mount(<Button>{buttonText}</Button>);
    cy.getByTestId('button-plain').should('not.have.attr', 'aria-controls');

    cy.mount(<Button ariaControls={'testControl'}>{buttonText}</Button>);
    cy.getByTestId('button-plain').should('have.attr', 'aria-controls', 'testControl');
  });

  it('should add an onClick action', () => {
    const mockClick = cy.stub();

    cy.mount(<Button onClick={mockClick}>{buttonText}</Button>);
    cy.getByTestId('button-plain').click();
    cy.wrap(mockClick).should('have.been.calledOnce');
  });
});
