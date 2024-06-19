import { useState } from 'react';
import { Layout } from '@layouts/layout/layout';
import { useDispatch } from 'react-redux';
import { createNews } from '@redux/reducer/news.reducer';
import { AppDispatch } from '@redux/store';
import { useRouter } from 'next/router';
import { useForm, UseFormReturn } from 'react-hook-form';
import { Heading } from '@elements/heading/heading';
import { t } from 'i18next';
import { Form } from '@elements/form/form';
import { Button } from '@elements/button/button';
import { Input } from '@elements/input/input';
import { Textarea } from '@elements/textarea/textarea';

interface FormData {
  title: string;
  content: string;
  news: string;
  created_by: string;
}

const PublishNewsPage = () => {
  const methods: UseFormReturn<FormData> = useForm();
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const onSubmit = async (data: FormData) => {
    try {
      await dispatch(createNews(data));
      setShowSuccessMessage(true);
      setTimeout(() => {
        setShowSuccessMessage(false);
        router.push('/news');
      }, 3000); // Show the message for 3 seconds before redirecting
    } catch (error) {
      console.error('Error publishing news:', error);
    }
  };

  return (
    <Layout>
      <Heading className="m-8 text-3xl font-bold">{t('navigation.publish-news')}</Heading>
      {showSuccessMessage && <Heading className="m-8">{t('common.newsCreatedMessage')}</Heading>}
      <Form className="m-8" methods={methods} onSubmit={onSubmit}>
        <Input type="text" id="title">
          {t('news.form.title')}
        </Input>
        <Textarea id="content">{t('news.form.content')}</Textarea>
        <Input type="text" id="news">
          {t('news.form.news')}
        </Input>
        <Input type="text" id="created_by">
          {t('news.form.createdBy')}
        </Input>
        <Button className="mt-5" type="submit">
          {t('common.publish')}
        </Button>
      </Form>
    </Layout>
  );
};

export default PublishNewsPage;
