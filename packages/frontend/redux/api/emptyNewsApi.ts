/* eslint-disable @typescript-eslint/no-explicit-any */
import { BaseQueryApi, createApi, FetchArgs, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RootState } from '@redux/store';
import { demoBaseQuery } from './demoBaseQuery';

const isLocalBackend = process.env.NEXT_PUBLIC_IS_LOCAL_BACKEND?.toLocaleLowerCase() === 'true';
const isDemo = true;

const customBaseQuery = (args: string | FetchArgs, baseQueryApi: BaseQueryApi, extraOptions?: any) => {
  const baseUrl = isLocalBackend ? '/api' : 'http://localhost:3001/news-feed/news';

  return fetchBaseQuery({
    baseUrl,
  })(args, baseQueryApi, extraOptions);
};

export const emptyNewsApi = createApi({
  baseQuery: ((args: string | FetchArgs, api: BaseQueryApi, extraOptions?: any) => {
    const defaultBaseQuery = () => customBaseQuery(args, api, extraOptions);

    return isDemo ? demoBaseQuery(args, api, defaultBaseQuery) : defaultBaseQuery();
  }) as any,
  endpoints: (build) => ({
    // Adjust the endpoint name and type based on your requirements
    getNewsFeed: build.query<any, void>({
      query: () => '/news-feed/news',
    }),
  }),
});

export const { useGetNewsFeedQuery } = emptyNewsApi;
