// ***********************************************************
// This example support/component.ts is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands';
import '../plugins/tailwind';
import '../../i18n/i18n';

// Alternatively you can use CommonJS syntax:
// require('./commands')

// eslint-disable-next-line import/no-extraneous-dependencies
import { mount as cypressMount } from 'cypress/react18';
import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { RootState } from '../../redux/store';

type MountOptions = {
  customRouter?: Record<string, unknown>;
  state?: Partial<RootState>;
};

// Augment the Cypress namespace to include type definitions for
// your custom command.
// Alternatively, can be defined in cypress/support/component.d.ts
// with a <reference path="./component" /> at the top of your spec.
declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Cypress {
    interface Chainable {
      mount(jsx: ReactNode, options?: MountOptions): ReturnType<typeof cypressMount>;
    }
  }
}

// Example use:
// cy.mount(<MyComponent />)

beforeEach(function () {
  const testFilter = Cypress.env('TEST_FILTER');
  if (!testFilter) return; // exit if no filter defined

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const testName = Cypress.mocha.getRunner().test.fullTitle();
  if (!testFilter.includes(testName)) {
    this.skip();
  }
});
