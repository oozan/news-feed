import { FieldValues, UseFormReturn } from 'react-hook-form';

import { Button } from '@elements/button/button';
import { Form } from '@elements/form/form';
import { mockUseFormClass } from '@mocks/mockUseFormClass';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
let mockUseForm: UseFormReturn<FieldValues, any>;
let mockOnSubmit: () => void;

describe('<Form> tests', () => {
  beforeEach(() => {
    mockUseForm = mockUseFormClass(cy);
    mockOnSubmit = cy.stub();
  });

  it('should render in default state', () => {
    cy.mount(
      <Form onSubmit={mockOnSubmit} methods={mockUseForm} testId="form-test">
        <span data-testid="form-test-child-element">Child</span>
      </Form>
    );

    cy.getByTestId('form-test')
      .should('exist')
      .within(() => {
        cy.getByTestId('form-test-child-element').should('exist');
      });
  });

  it('should add custom classname to html element', () => {
    cy.mount(
      <Form onSubmit={mockOnSubmit} methods={mockUseForm} testId="form-test">
        <span />
      </Form>
    );
    cy.getByTestId('form-test').should('not.have.class', 'opacity-100');

    cy.mount(
      <Form onSubmit={mockOnSubmit} methods={mockUseForm} testId="form-test" className="opacity-100">
        <span />
      </Form>
    );
    cy.getByTestId('form-test').should('have.class', 'opacity-100');
  });

  it('should modify aria-hidden state', () => {
    cy.mount(
      <Form onSubmit={mockOnSubmit} methods={mockUseForm} testId="form-test">
        <span />
      </Form>
    );
    cy.getByTestId('form-test').should('not.have.attr', 'aria-hidden');

    cy.mount(
      <Form onSubmit={mockOnSubmit} methods={mockUseForm} testId="form-test" isHidden>
        <span />
      </Form>
    );
    cy.getByTestId('form-test').should('have.attr', 'aria-hidden', 'true');
  });

  it('should invoke onSubmit event when submitting form', () => {
    cy.mount(
      <Form onSubmit={mockOnSubmit} methods={mockUseForm} testId="form-test">
        <Button type="submit" testId="form-submit-button">
          Submit
        </Button>
      </Form>
    );

    cy.getByTestId('form-submit-button').click();
    cy.wrap(mockOnSubmit).should('have.been.calledOnce');
  });
});
