import { RootState } from '@redux/store';
import { fetchNews } from '@redux/reducer/news.reducer';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { Layout } from '@layouts/layout/layout';
import { DataHandler } from '@blocks/data-handler/data-handler';
import { ArticleTeaser } from './article-teaser/article-teaser';
import { Drawer } from '@blocks/drawer/drawer';

const NewsPage = () => {
  const dispatch: ThunkDispatch<RootState, any, any> = useDispatch();
  const { news, error } = useSelector((state: RootState) => state.news);

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleDrawerClose = () => {
    setIsSidebarOpen(false);
  };

  console.log(news);

  useEffect(() => {
    dispatch(fetchNews())
      .then((response) => console.log(response))
      .catch((error) => console.error('Error fetching news:', error));
  }, [dispatch]);

  return (
    <>
      {' '}
      <Layout>
        <h1>News Page</h1>
        <DataHandler error={error} data={news}>
          <ul className="space-y-4 lg:space-y-3">
            {news?.map((article) => {
              return (
                <li key={article.id}>
                  <ArticleTeaser {...article} />
                </li>
              );
            })}
          </ul>
        </DataHandler>
      </Layout>
      <Drawer onClose={handleDrawerClose} noBackdrop id="addEmployeerDrawer">
        AASSDD
      </Drawer>
    </>
  );
};

export default NewsPage;
