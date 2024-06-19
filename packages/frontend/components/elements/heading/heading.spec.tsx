import { Heading } from '@elements/heading/heading';

describe('<Heading> tests', () => {
  const headingText = 'Heading test';

  it('should render in default state', () => {
    cy.mount(<Heading>{headingText}</Heading>);

    cy.getByTestId('heading').should('exist').should('have.text', headingText);
    cy.getByTestId('heading').should('have.prop', 'tagName').should('equal', 'H2');
  });

  it('should render with correct html element', () => {
    cy.mount(<Heading variant="h1">{headingText}</Heading>);

    cy.getByTestId('heading').should('have.prop', 'tagName').should('equal', 'H1');
    cy.getByTestId('heading').should('have.attr', 'data-heading-style-level', 'h1');
  });

  it('should not modify html element with style prop', () => {
    cy.mount(<Heading style="h3">{headingText}</Heading>);

    cy.getByTestId('heading').should('have.prop', 'tagName').should('equal', 'H2');
    cy.getByTestId('heading').should('have.attr', 'data-heading-style-level', 'h3');
  });

  it('should add custom classname to html element', () => {
    cy.mount(<Heading>{headingText}</Heading>);
    cy.getByTestId('heading').should('not.have.class', '!text-9xl');

    cy.mount(<Heading className="!text-9xl">{headingText}</Heading>);
    cy.getByTestId('heading').should('have.class', '!text-9xl');
  });

  it('should render with all props', () => {
    cy.mount(
      <Heading variant="h1" style="h3" className="!text-9xl">
        {headingText}
      </Heading>
    );

    cy.getByTestId('heading').should('have.prop', 'tagName').should('equal', 'H1');
    cy.getByTestId('heading').should('have.class', '!text-9xl');
    cy.getByTestId('heading').should('have.attr', 'data-heading-style-level', 'h3');
  });
});
