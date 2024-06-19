// In emptyNewsApi.ts
import { BaseQueryApi, createApi, FetchArgs, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { demoBaseQuery } from './demoBaseQuery';

const isDemo = true;

const customBaseQuery = (args: string | FetchArgs, baseQueryApi: BaseQueryApi, extraOptions?: any) => {
  return fetchBaseQuery({
    baseUrl: isDemo ? '' : '/api', // Adjust the base URL for demo mode
  })(args, baseQueryApi, extraOptions);
};

export const emptyNewsApi = createApi({
  baseQuery: ((args: string | FetchArgs, api: BaseQueryApi, extraOptions?: any) => {
    const defaultBaseQuery = () => customBaseQuery(args, api, extraOptions);
    return isDemo ? demoBaseQuery(args, api, defaultBaseQuery) : defaultBaseQuery();
  }) as any,
  endpoints: (build) => ({
    getNewsFeed: build.query<any, void>({
      query: () => '/news-feed/news',
    }),
  }),
});

export const { useGetNewsFeedQuery } = emptyNewsApi;
