
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

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
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: NewsState = {
  news: [],
  status: "idle",
  error: null,
};

// Define an async thunk to fetch news from the backend API
const fetchNews = createAsyncThunk("news/fetchNews", async () => {
  const response = await fetch("http://localhost:3001/news-feed/news");
  const data = await response.json();
  return data;
});

const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchNews.pending, (state) => {
        state.status = "loading";
      })
      .addCase(
        fetchNews.fulfilled,
        (state, action: PayloadAction<NewsDTO[]>) => {
          state.status = "succeeded";
          state.news = action.payload;
        }
      )
      .addCase(fetchNews.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message ?? "Failed to fetch news";
      });
  },
});

export const selectNews = (state: { news: NewsState }) => state.news;

// Export the reducer and the async thunk
export const { reducer: newsReducer } = newsSlice;
export { fetchNews }; // Export fetchNews once, without redeclaring
