// In demoBaseQuery.ts
import { FetchArgs, BaseQueryApi } from '@reduxjs/toolkit/dist/query';

export const SHOW_LOADER_IN_DEMO = true;

export const DemoQueryPromise = <T = unknown>(returnValue: T): Promise<T> => {
  if (SHOW_LOADER_IN_DEMO) {
    return new Promise((resolve) => setTimeout(() => resolve({ ...returnValue }), 200));
  }

  return Promise.resolve({ ...returnValue });
};

export const demoBaseQuery = (args: string | FetchArgs, api: BaseQueryApi, normalBaseQuery: () => any) => {
  switch (api.endpoint) {
    // Adjust the endpoint names based on your requirements
    case 'getNewsFeed':
      // Simulate a demo response for the getNewsFeed query
      return DemoQueryPromise({
        // Return mock data or adjust it based on your needs
        data: [{ id: 1, title: 'Demo News', content: 'This is a demo news item.' }],
      });
    case 'someOtherEndpoint':
      // Simulate a demo response for another endpoint
      return DemoQueryPromise({
        // Return mock data or adjust it based on your needs
        // ...
      });
    default:
      // If the endpoint doesn't match any specific case, use the normalBaseQuery
      return normalBaseQuery();
  }
};
