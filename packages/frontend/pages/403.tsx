import { Button } from '@elements/button/button';
import { Heading } from '@elements/heading/heading';
import { Layout } from '@layouts/layout/layout';
import { useTranslation } from 'react-i18next';

export default function Error403() {
  const { t } = useTranslation();

  return (
    <Layout>
      <Heading variant="h1" className="mb-4">
        {t('errorPage.titles.403')}
      </Heading>
      <Button url="/">{t('errorPage.goBackCta')}</Button>
    </Layout>
  );
}
