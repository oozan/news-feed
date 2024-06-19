import { FieldValues, UseFormRegisterReturn, UseFormReturn } from 'react-hook-form';

import { Textarea } from './textarea';

import { mockUseFormClass } from '@mocks/mockUseFormClass';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
let mockUseForm: UseFormReturn<FieldValues, any>;
let mockOnChange: UseFormRegisterReturn['onChange'];

describe('<Textarea> tests', () => {
  const textareaLabel = 'Textarea test';
  const textareaId = 'textareaTest';

  beforeEach(() => {
    mockUseForm = mockUseFormClass(cy, {
      register: () => ({
        onChange: mockOnChange,
        onBlur: cy.stub(),
        ref: cy.stub(),
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        name: 'dummy' as any,
      }),
    });
    mockOnChange = cy.stub();
  });

  it('should render in default state', () => {
    cy.mount(
      <Textarea testId="form-item" id={textareaId}>
        {textareaLabel}
      </Textarea>
    );

    cy.getByTestId('form-item').should('exist');
    cy.getByTestId('form-item-label')
      .should('exist')
      .should('have.text', textareaLabel)
      .should('have.prop', 'for', textareaId);
    cy.getByTestId('form-item-textarea').should('exist').should('have.id', textareaId);
  });

  it('should modify required attribute', () => {
    cy.mount(
      <Textarea testId="form-item" id={textareaId}>
        {textareaLabel}
      </Textarea>
    );

    cy.getByTestId('form-item-textarea').should('have.attr', 'aria-required', 'false');

    cy.mount(
      <Textarea testId="form-item" id={textareaId} isRequired>
        {textareaLabel}
      </Textarea>
    );

    cy.getByTestId('form-item-textarea').should('have.attr', 'aria-required', 'true');
  });

  it('should modify min attribute', () => {
    cy.mount(
      <Textarea testId="form-item" id={textareaId}>
        {textareaLabel}
      </Textarea>
    );

    cy.getByTestId('form-item-textarea').should('not.have.attr', 'min');

    cy.mount(
      <Textarea testId="form-item" id={textareaId} min={1}>
        {textareaLabel}
      </Textarea>
    );

    cy.getByTestId('form-item-textarea').should('have.attr', 'min', 1);
  });

  it('should modify max attribute', () => {
    cy.mount(
      <Textarea testId="form-item" id={textareaId}>
        {textareaLabel}
      </Textarea>
    );

    cy.getByTestId('form-item-textarea').should('not.have.attr', 'max');

    cy.mount(
      <Textarea testId="form-item" id={textareaId} max={1}>
        {textareaLabel}
      </Textarea>
    );

    cy.getByTestId('form-item-textarea').should('have.attr', 'max', 1);
  });

  it('should modify placeholder attribute', () => {
    cy.mount(
      <Textarea testId="form-item" id={textareaId}>
        {textareaLabel}
      </Textarea>
    );

    cy.getByTestId('form-item-textarea').should('not.have.attr', 'step');

    cy.mount(
      <Textarea testId="form-item" id={textareaId} placeholder={'test'}>
        {textareaLabel}
      </Textarea>
    );

    cy.getByTestId('form-item-textarea').should('have.attr', 'placeholder', 'test');
  });

  it('should add custom classname to html element', () => {
    cy.mount(
      <Textarea testId="form-item" id={textareaId}>
        {textareaLabel}
      </Textarea>
    );
    cy.getByTestId('form-item').should('not.have.class', 'opacity-50');

    cy.mount(
      <Textarea testId="form-item" id={textareaId} className="opacity-50">
        {textareaLabel}
      </Textarea>
    );

    cy.getByTestId('form-item').should('have.class', 'opacity-50');
  });

  it('should invoke RHF onChange event when input is changed', () => {
    const inputText = 'this is a change event';

    cy.mount(
      <Textarea testId="form-item" id={textareaId}>
        {textareaLabel}
      </Textarea>,
      { formMethods: mockUseForm }
    );

    cy.getByTestId('form-item-textarea').type(inputText);
    cy.wrap(mockOnChange).should('have.been.called');
  });
});
