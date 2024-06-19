import { Paragraph } from '@elements/paragraph/paragraph';

describe('<Paragraph> tests', () => {
  const paragraphText = 'Paragraph test';

  it('should render in default state', () => {
    cy.mount(<Paragraph>{paragraphText}</Paragraph>);

    cy.getByTestId('paragraph').should('exist').should('have.text', paragraphText);
    cy.getByTestId('paragraph').should('have.prop', 'tagName').should('equal', 'P');
  });

  it('should add custom classname to html element', () => {
    cy.mount(<Paragraph>{paragraphText}</Paragraph>);
    cy.getByTestId('paragraph').should('not.have.class', '!text-9xl');

    cy.mount(<Paragraph className="!text-9xl">{paragraphText}</Paragraph>);
    cy.getByTestId('paragraph').should('have.class', '!text-9xl');
  });
});
