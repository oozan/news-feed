import { useTranslation } from 'react-i18next';

import { Heading } from '@elements/heading/heading';
import { Layout } from '@layouts/layout/layout';

export default function Home() {
  const { t } = useTranslation();

  return (
    <Layout>
      <div className="flex flex-col items-ceLayoutustify-center">
        <Heading className="text-3xl font-bold"> {t('common.initial')}</Heading>
        <p className="mt-6 text-center">{t('common.paragraph_1')}</p>
        <p className="text-center">{t('common.paragraph_2')}</p>
      </div>
    </Layout>
  );
}
