import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { newsReducer, newsSlicePath } from './NewsSlice';
import { TypedUseSelectorHook, useSelector } from 'react-redux';

const rootReducer = combineReducers({
  [newsSlicePath]: newsReducer,
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const createStore = (initialValues?: any) =>
  configureStore({
    preloadedState: initialValues,
    devTools: true,
    reducer: rootReducer,
  });

const store = createStore();

store.subscribe(() => {
  const state = store.getState();
});

export type RootState = ReturnType<typeof store.getState>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
