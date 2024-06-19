import { DataHandler } from './data-handler';

let mockDataHandlerState = {};

describe('<DataHandler> tests', () => {
  beforeEach(() => {
    mockDataHandlerState = { isLoading: false, error: undefined, data: undefined };
  });

  it('should render loader', () => {
    mockDataHandlerState = {
      ...mockDataHandlerState,
      isLoading: true,
    };

    cy.mount(
      <DataHandler {...mockDataHandlerState}>
        <span data-testid="test-child" />
      </DataHandler>
    );

    cy.getByTestId('loader').should('exist');
    cy.getByTestId('data-handler-error-message').should('not.exist');
    cy.getByTestId('data-handler-data-error-message').should('not.exist');
    cy.getByTestId('test-child').should('not.exist');
  });

  it('should render error message', () => {
    mockDataHandlerState = {
      ...mockDataHandlerState,
      error: {},
    };

    cy.mount(
      <DataHandler {...mockDataHandlerState}>
        <span data-testid="test-child" />
      </DataHandler>
    );

    cy.getByTestId('loader').should('not.exist');
    cy.getByTestId('data-handler-error-message').should('exist');
    cy.getByTestId('data-handler-data-error-message').should('not.exist');
    cy.getByTestId('test-child').should('not.exist');
  });

  it('should render data error message', () => {
    cy.mount(
      <DataHandler {...mockDataHandlerState}>
        <span data-testid="test-child" />
      </DataHandler>
    );

    cy.getByTestId('loader').should('not.exist');
    cy.getByTestId('data-handler-error-message').should('not.exist');
    cy.getByTestId('data-handler-data-error-message').should('exist');
    cy.getByTestId('test-child').should('not.exist');
  });

  it('should render data', () => {
    mockDataHandlerState = {
      ...mockDataHandlerState,
      data: {},
    };

    cy.mount(
      <DataHandler {...mockDataHandlerState}>
        <span data-testid="test-child" />
      </DataHandler>
    );

    cy.getByTestId('loader').should('not.exist');
    cy.getByTestId('data-handler-error-message').should('not.exist');
    cy.getByTestId('data-handler-data-error-message').should('not.exist');
    cy.getByTestId('test-child').should('exist');
  });
});
