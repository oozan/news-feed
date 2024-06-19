import { createSlice, createAsyncThunk, PayloadAction, ThunkAction } from '@reduxjs/toolkit';
import { AppDispatch, RootState } from '@redux/store';
import { NewsDto } from '@redux/api/generated/NewsApi';

interface NewsDTO {
  id: string;
  title: string;
  content: string;
  news: string;
  created_by: string;
  created_at: string;
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

export const fetchNews = createAsyncThunk('news/fetchNews', async () => {
  const response = await fetch('/api/news');
  const data = await response.json();
  console.log(data);
  return data;
});

export const newsSlicePath = 'news';

const newsSlice = createSlice({
  name: 'news',
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
  extraReducers: (builder) => {
    builder
      .addCase(fetchNews.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchNews.fulfilled, (state, action: PayloadAction<NewsDTO[]>) => {
        state.status = 'succeeded';
        state.news = action.payload;
      })
      .addCase(fetchNews.rejected, (state, action) => {
        if (action.payload instanceof Error) {
          state.status = 'failed';
          state.error = action.payload.message;
        } else if (typeof action.payload === 'string') {
          state.status = 'failed';
          state.error = action.payload;
        } else {
          state.status = 'failed';
          state.error = 'An unknown error occurred';
        }
      });
  },
});

export const createNews = createAsyncThunk<void, Partial<NewsDto>, { rejectValue: string }>(
  'news/createNews',
  async (newsData, thunkAPI) => {
    try {
      const response = await fetch('/api/news', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newsData),
      });

      if (!response.ok) {
        throw new Error('Failed to create news');
      }

      // Dispatch action to fetch news after successful creation
      thunkAPI.dispatch(fetchNews()); // Assuming fetchNews is correctly imported
    } catch (error) {
      console.error('Error publishing news:', error);
      throw error; // Rethrow the error to be handled by the caller
    }
  }
);

// Export the reducer and the async thunk
export const { reducer: newsReducer } = newsSlice;
export const { fetchNewsPending, fetchNewsFulfilled, fetchNewsRejected } = newsSlice.actions;
