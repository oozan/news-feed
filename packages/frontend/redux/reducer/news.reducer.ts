import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

interface NewsDTO {
  id: string;
  title: string;
  content: string;
  news: string;
  created_by: string;
  created_at: Date;
}

interface NewsState {
  news: NewsDTO[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: NewsState = {
  news: [],
  status: 'idle',
  error: null,
};

export const newsSlicePath = 'news';

const newsSlice = createSlice({
  name: newsSlicePath,
  initialState,
  reducers: {
    fetchNewsPending(state) {
      state.status = 'loading';
    },
    fetchNewsFulfilled(state, action: PayloadAction<NewsDTO[]>) {
      state.status = 'succeeded';
      state.news = action.payload;
    },
    fetchNewsRejected(state, action: PayloadAction<string>) {
      state.status = 'failed';
      state.error = action.payload ?? 'Failed to fetch news';
    },
  },
});

// Export the reducer and the async thunk
export const { fetchNewsPending, fetchNewsFulfilled, fetchNewsRejected } = newsSlice.actions;
export const { reducer: newsReducer } = newsSlice;
