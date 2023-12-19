// news.tsx

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchNews, selectNews } from "@redux/NewsSlice"; // Replace with the correct path

const NewsPage: React.FC = () => {
  const dispatch = useDispatch();
  const { news, status, error } = useSelector(selectNews);

  useEffect(() => {
    // Dispatch the fetchNews action directly
    dispatch(fetchNews() as any); // Casting as any to resolve type error
  }, [dispatch]);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "failed") {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>News Page</h1>
      <ul>
        {news.map((item) => (
          <li key={item.id}>
            <h3>{item.title}</h3>
            <p>{item.content}</p>
            {/* Add more fields as needed */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NewsPage;
