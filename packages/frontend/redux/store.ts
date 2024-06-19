import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { newsReducer, newsSlicePath } from './reducer/news.reducer';
import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { emptyNewsApi } from './api/emptyNewsApi';

const rootReducer = combineReducers({
  [emptyNewsApi.reducerPath]: emptyNewsApi.reducer,
  [newsSlicePath]: newsReducer,
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const createStore = (initialValues?: any) =>
  configureStore({
    preloadedState: initialValues,
    devTools: true,
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
        immutableCheck: { warnAfter: 100 },
      }).concat(emptyNewsApi.middleware),
  });

const store = createStore();

store.subscribe(() => {
  const state = store.getState();
});

export type RootState = ReturnType<typeof store.getState>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export type AppDispatch = typeof store.dispatch;

export default store;
