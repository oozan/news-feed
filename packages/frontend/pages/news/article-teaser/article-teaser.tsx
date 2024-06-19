import clsx from 'clsx';
import { format } from 'date-fns';
import { useTranslation } from 'react-i18next';

import { Heading } from '@elements/heading/heading';
import { Icon, IconName } from '@elements/icon/icon';
import { Link } from '@elements/link/link';
import { Paragraph } from '@elements/paragraph/paragraph';

import { NewsDto } from '@redux/api/generated/NewsApi';
import { truncateWithEllipses } from '@utils/truncateWithEllipses';

export const ArticleTeaser = ({ id, title, content, news, created_by, created_at }: NewsDto) => {
  const { t } = useTranslation();
  const formattedDate = format(new Date(created_at), 'MMM d, yyyy H:mm aa');

  const articleTeaserClasses = clsx(
    'group relative grid gap-4 rounded-md border border-port-gore/10 bg-white p-4 transition-opacity lg:grid-cols-[1fr,3fr]',
    'hover:opacity-50',
    'focus-within:outline focus-within:outline-4 focus-within:outline-sherpa-blue/75'
  );

  return (
    <article className={articleTeaserClasses} data-testid="article-teaser">
      <section className="relative aspect-[72/31] h-full w-full lg:aspect-[237/155]"></section>
      <section>
        <Heading className="mb-1 font-bold text-tundora" style="h4">
          <span className="inline-flex h-full items-center">
            <Icon icon={IconName.news} className="mr-2 inline-block h-[18px] w-[18px] fill-sherpa-blue" />
          </span>
          {title}
        </Heading>
        <Paragraph className="text-tundora">{truncateWithEllipses(content, 140)}</Paragraph>
        <div className="mt-2 text-[0.875rem] text-port-gore">
          <div className="mb-2 flex flex-wrap gap-x-4 gap-y-1">
            <span className="inline-flex items-center capitalize">
              <Icon icon={IconName.news} className="mr-2 inline-block h-4 w-4 fill-sherpa-blue" />
              {created_by}
            </span>
            <span className="inline-flex items-center capitalize">
              <Icon icon={IconName.news} className="mr-2 inline-block h-4 w-4 fill-sherpa-blue" />
              {news}
            </span>
          </div>
          <div className="flex justify-between gap-x-4">
            <span className="truncate">{`${t('news.publishedOn')}: ${formattedDate}`}</span>
            <Link url={`/news/${id}`} className="shrink-0 text-[0.875rem] uppercase focus:outline-none" isAbsolute>
              {t('common.readMore')}...
            </Link>
          </div>
        </div>
      </section>
    </article>
  );
};
