import { useTranslation } from 'react-i18next';

import { Heading } from '@elements/heading/heading';
import { Layout } from '@layouts/layout/layout';
import { Paragraph } from '@elements/paragraph/paragraph';

export default function Home() {
  const { t } = useTranslation();

  return (
    <Layout>
      <div className="flex flex-col items-center justify-center">
        <Heading className="text-3xl font-bold"> {t('common.initial')}</Heading>
        <Paragraph className="mt-6 text-center">{t('common.paragraph_1')}</Paragraph>
        <Paragraph className="text-center">{t('common.paragraph_2')}</Paragraph>
      </div>
    </Layout>
  );
}
