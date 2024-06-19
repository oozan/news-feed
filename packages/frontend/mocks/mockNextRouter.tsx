import { RouterContext } from 'next/dist/shared/lib/router-context.shared-runtime';
import { NextRouter } from 'next/router';

const createRouter = (): NextRouter => {
  return {
    pathname: '/',
    route: '/',
    query: {},
    asPath: '/',
    isFallback: false,
    isReady: false,
    isPreview: false,
    basePath: '',
    events: { emit: cy.spy().as('emit'), off: cy.spy().as('off'), on: cy.spy().as('on') },
    push: cy.spy().as('push'),
    replace: cy.spy().as('replace'),
    reload: cy.spy().as('reload'),
    back: cy.spy().as('back'),
    forward: cy.spy().as('forward'),
    prefetch: cy.spy().as('prefetch'),
    beforePopState: cy.spy().as('beforePopState'),
    isLocaleDomain: false,
  };
};

interface MockNextRouterProps {
  children: React.ReactNode;
  customRouter?: Record<string, unknown>;
}

export const MockNextRouter = ({ children, customRouter }: MockNextRouterProps) => {
  const router = createRouter();

  const parsedProviderValue = { ...router, ...customRouter };

  return <RouterContext.Provider value={parsedProviderValue}>{children}</RouterContext.Provider>;
};
