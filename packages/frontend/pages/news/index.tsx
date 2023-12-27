// news/index.tsx
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNews, selectNews } from '@redux/NewsSlice';
import { AppDispatch } from '@redux/store';

const NewsPage = () => {
  const dispatch: AppDispatch = useDispatch(); // Explicitly type dispatch with AppDispatch
  const { news, status, error } = useSelector(selectNews);

  useEffect(() => {
    // Dispatch the fetchNews action when the component mounts
    dispatch(fetchNews());
  }, [dispatch]);

  // Handling different status states
  if (status === 'loading') {
    return <p>Loading...</p>;
  }

  if (status === 'failed') {
    return <p>Error: {error}</p>;
  }

  // Render the news data
  return (
    <div>
      <h1>News Page</h1>
      <ul>
        {news.map((item) => (
          <li key={item.id}>
            <h3>{item.title}</h3>
            <p>{item.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NewsPage;
