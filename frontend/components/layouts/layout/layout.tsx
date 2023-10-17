import clsx from "clsx";

export interface LayoutProps {
  testId?: string;
}

export const Layout = ({ testId }: LayoutProps): JSX.Element => {
  const layoutClasses = clsx(
    "relative mx-auto min-h-screen max-w-[1440px] lg:grid lg:grid-cols-[240px,1fr] lg:grid-rows-[80px,1fr]",
    {}
  );
  const mainClasses = clsx("max-lg:mt-14 lg:row-start-2");

  return (
    <section className={layoutClasses} data-testid={testId}>
      Test
      <main className={mainClasses} data-testid="main">
        Test
      </main>
    </section>
  );
};
