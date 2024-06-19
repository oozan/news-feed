import { UseFormReturn, FieldValues, FormState } from 'react-hook-form';

interface AdditionalProps {
  register?: UseFormReturn<FieldValues, any>['register'];
  watch?: UseFormReturn<FieldValues, any>['watch'];
  formState?: UseFormReturn<FieldValues, any>['formState'];
}

export const mockUseFormState: FormState<FieldValues> = {
  isDirty: false,
  isSubmitSuccessful: false,
  isSubmitted: false,
  isSubmitting: false,
  isValid: false,
  isValidating: false,
  submitCount: 0,
  dirtyFields: {},
  touchedFields: {},
  errors: {},
  isLoading: false,
  disabled: false,
  validatingFields: {},
};

export const mockUseFormClass = (cy: Cypress.cy & CyEventEmitter, additionalProps?: AdditionalProps) => {
  return {
    handleSubmit: (onSubmit) => (e) => {
      e?.preventDefault();
      onSubmit({});
      return Promise.resolve();
    },
    watch: cy.stub(),
    getValues: cy.stub(),
    getFieldState: cy.stub(),
    setError: () => cy.stub(),
    clearErrors: () => cy.stub(),
    setValue: () => cy.stub(),
    trigger: cy.stub(),
    formState: mockUseFormState,
    resetField: () => cy.stub(),
    reset: () => cy.stub(),
    unregister: () => cy.stub(),
    control: {} as any,
    register: cy.stub(),
    setFocus: () => cy.stub(),
    ...additionalProps,
  } as UseFormReturn<FieldValues, any>;
};
