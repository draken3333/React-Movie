import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import movieAPI from "../../assets/API/movieAPI";
import { API_KEY } from "../../assets/API/movieAPIKey";

export const fetchAsyncMovie = createAsyncThunk(
  "movie/fetchAsyncMovie",
  async () => {
    const movieText = "Batman";

    const response = await movieAPI
      .get(`?apikey=${API_KEY}&s=${movieText}&type=movie`)
      .then(({ data }) => data.Search);

    return response;
  }
);

export const fetchAsyncSeries = createAsyncThunk(
  "series/fetchAsynSeries",
  async () => {
    const seriesText = "Friends";

    const response = await movieAPI
      .get(`?apikey=${API_KEY}&s=${seriesText}&type=series`)
      .then(({ data }) => data.Search);

    return response;
  }
);

export const fetchAsyncDetails = createAsyncThunk(
  "seriesAndMovies/fetchAsyncDetails",
  async (id) => {
    const response = await movieAPI.get(`?apikey=${API_KEY}&i=${id}&plot=full`);

    return response.data;
  }
);

// const initialState = {
//   movies: [],
// };

const movieSlice = createSlice({
  name: "movies",
  initialState: { movies: [], shows: [], detailsOfMoviesAndShows: {} },
  reducers: {
    // addMovies: (state, { payload }) => {
    //   state.movies = payload;
    // },
    //^ Что делает? После того как компонент размонтируеться выполниться эффект сброса , clean => он выполнит action removeSlectedContent что сбросит наш detailsOfMoviesAndShows.
    //^ Зачем? Потому что если не делать так то - заход на card , запоминает ИНФУ и когда мы возвращаемся назад и заходим на другую карточку , проходит время рендера и мы на секунду видем как старый компонент меняеться на новый что не допустимо.
    
    removeSlectedContent: (state) => {
      state.detailsOfMoviesAndShows = {};
    },
  },

  extraReducers: {
    [fetchAsyncMovie.pending]: () => {
      console.log("Panding");
    },
    [fetchAsyncMovie.fulfilled]: (state, { payload }) => {
      console.log("Fetch Successfully");
      return { ...state, movies: payload };
    },
    [fetchAsyncMovie.rejected]: () => {
      console.log("Rejected");
    },
    [fetchAsyncSeries.fulfilled]: (state, { payload }) => {
      console.log("Fetch Successfully");
      return { ...state, shows: payload };
    },
    [fetchAsyncDetails.fulfilled]: (state, { payload }) => {
      console.log("Fetch Successfully");
      return { ...state, detailsOfMoviesAndShows: payload };
    },
  },
});

// export const { addMovies } = movieSlice.actions;
export const { removeSlectedContent } = movieSlice.actions;
export const getShows = (state) => state.movies.shows;
export const getAllMovies = (state) => state.movies.movies;
export const getDetailsOfMoviesAndShows = (state) =>
  state.movies.detailsOfMoviesAndShows;

export default movieSlice.reducer;
