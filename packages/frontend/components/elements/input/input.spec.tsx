import { FieldValues, UseFormRegisterReturn, UseFormReturn } from 'react-hook-form';

import { Input, InputTypes } from '@elements/input/input';
import { mockUseFormClass } from '@mocks/mockUseFormClass';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
let mockUseForm: UseFormReturn<FieldValues, any>;
let mockOnChange: UseFormRegisterReturn['onChange'];

describe('<Input> tests', () => {
  const inputLabel = 'Input test';
  const inputId = 'inputTest';

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
      <Input testId="form-item" id={inputId}>
        {inputLabel}
      </Input>
    );

    cy.getByTestId('form-item').should('exist');
    cy.getByTestId('form-item-label')
      .should('exist')
      .should('have.text', inputLabel)
      .should('have.prop', 'for', inputId);
    cy.getByTestId('form-item-input').should('exist').should('have.id', inputId);
    cy.getByTestId('form-item-input').should('have.attr', 'type', 'text');
  });

  ['text', 'number', 'datetime-local', 'date'].map((type) => {
    it(`should modify type attribute to ${type}`, () => {
      cy.mount(
        <Input testId="form-item" id={inputId} type={type as InputTypes}>
          {inputLabel}
        </Input>
      );

      cy.getByTestId('form-item-input').should('have.attr', 'type', type);
    });
  });

  it('should modify required attribute', () => {
    cy.mount(
      <Input testId="form-item" id={inputId}>
        {inputLabel}
      </Input>
    );

    cy.getByTestId('form-item-input').should('have.attr', 'aria-required', 'false');

    cy.mount(
      <Input testId="form-item" id={inputId} isRequired>
        {inputLabel}
      </Input>
    );

    cy.getByTestId('form-item-input').should('have.attr', 'aria-required', 'true');
  });

  it('should modify min attribute', () => {
    cy.mount(
      <Input testId="form-item" id={inputId}>
        {inputLabel}
      </Input>
    );

    cy.getByTestId('form-item-input').should('not.have.attr', 'min');

    cy.mount(
      <Input testId="form-item" id={inputId} min={1}>
        {inputLabel}
      </Input>
    );

    cy.getByTestId('form-item-input').should('have.attr', 'min', 1);
  });

  it('should modify max attribute', () => {
    cy.mount(
      <Input testId="form-item" id={inputId}>
        {inputLabel}
      </Input>
    );

    cy.getByTestId('form-item-input').should('not.have.attr', 'max');

    cy.mount(
      <Input testId="form-item" id={inputId} max={1}>
        {inputLabel}
      </Input>
    );

    cy.getByTestId('form-item-input').should('have.attr', 'max', 1);
  });

  it('should modify step attribute', () => {
    cy.mount(
      <Input testId="form-item" id={inputId}>
        {inputLabel}
      </Input>
    );

    cy.getByTestId('form-item-input').should('not.have.attr', 'step');

    cy.mount(
      <Input testId="form-item" id={inputId} step={1}>
        {inputLabel}
      </Input>
    );

    cy.getByTestId('form-item-input').should('have.attr', 'step', 1);
  });

  it('should modify placeholder attribute', () => {
    cy.mount(
      <Input testId="form-item" id={inputId}>
        {inputLabel}
      </Input>
    );

    cy.getByTestId('form-item-input').should('not.have.attr', 'step');

    cy.mount(
      <Input testId="form-item" id={inputId} placeholder={'test'}>
        {inputLabel}
      </Input>
    );

    cy.getByTestId('form-item-input').should('have.attr', 'placeholder', 'test');
  });

  it('should add custom classname to html element', () => {
    cy.mount(
      <Input testId="form-item" id={inputId}>
        {inputLabel}
      </Input>
    );
    cy.getByTestId('form-item').should('not.have.class', 'opacity-50');

    cy.mount(
      <Input testId="form-item" id={inputId} className="opacity-50">
        {inputLabel}
      </Input>
    );

    cy.getByTestId('form-item').should('have.class', 'opacity-50');
  });

  it('should invoke RHF onChange event when input is changed', () => {
    const inputText = 'this is a change event';

    cy.mount(
      <Input testId="form-item" id={inputId}>
        {inputLabel}
      </Input>,
      { formMethods: mockUseForm }
    );

    cy.getByTestId('form-item-input').type(inputText);
    cy.wrap(mockOnChange).should('have.been.called');
  });
});
