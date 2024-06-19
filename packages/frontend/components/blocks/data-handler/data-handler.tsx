import { useTranslation } from 'react-i18next';



import { Paragraph } from '@elements/paragraph/paragraph';
import { Loader } from '@blocks/loader/loader';

interface DataHandlerProps {
  isLoading?: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  error?: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data?: any;
  children: React.ReactNode;
}

export const DataHandler = ({ isLoading, error, data, children }: DataHandlerProps) => {
  const { t } = useTranslation();

  if (isLoading) return <Loader isLoading />;

  if (error) {
    console.error(error);
    return <Paragraph testId="data-handler-error-message">{t('common.errors.somethingWentWrong')}</Paragraph>;
  }

  if (!data) return <Paragraph testId="data-handler-data-error-message">{t('common.errors.noData')}</Paragraph>;

  return <>{children}</>;
};
