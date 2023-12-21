import { Link } from '@elements/link/link';

describe('<Link> tests', () => {
  const linkText = 'Link test';
  const linkUrl = { internal: '/test-url', external: 'https://foo.bar' };

  it('should render with correct html element depending on passed url', () => {
    cy.mount(<Link url={linkUrl.internal}>{linkText}</Link>);

    cy.getByTestId('link-internal').should('exist').should('have.text', linkText);
    cy.getByTestId('link-internal').should('have.prop', 'tagName').should('equal', 'A');

    cy.mount(<Link url={linkUrl.external}>{linkText}</Link>);

    cy.getByTestId('link-external').should('exist').should('have.text', linkText);
    cy.getByTestId('link-external').should('have.prop', 'tagName').should('equal', 'A');
  });

  it('should add custom test-id to html element', () => {
    const mockTestId = 'custom-testid';

    cy.mount(
      <Link url={linkUrl.internal} testId={mockTestId}>
        {linkText}
      </Link>
    );
    cy.getByTestId(mockTestId).should('exist');

    cy.mount(
      <Link url={linkUrl.external} testId={mockTestId}>
        {linkText}
      </Link>
    );
    cy.getByTestId(mockTestId).should('exist');
  });

  it('should add custom classname to html element', () => {
    cy.mount(<Link url={linkUrl.internal}>{linkText}</Link>);

    cy.getByTestId('link-internal').should('not.have.class', '!text-9xl');

    cy.mount(
      <Link url={linkUrl.internal} className="!text-9xl">
        {linkText}
      </Link>
    );

    cy.getByTestId('link-internal').should('have.class', '!text-9xl');
  });

  it('should render correct html element when active', () => {
    cy.mount(
      <Link url={linkUrl.internal} activeClassName="text-9xl">
        {linkText}
      </Link>
    );

    cy.getByTestId('link-internal-active').should('not.exist');
    cy.getByTestId('link-internal').should('not.have.class', 'text-9xl');

    cy.getByTestId('link-internal').should('not.exist');
    cy.getByTestId('link-internal-active').should('exist', 'text-9xl');
    cy.getByTestId('link-internal-active').should('have.class', 'text-9xl');
  });
});
