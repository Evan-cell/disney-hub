import { configureStore } from '@reduxjs/toolkit'
import MovieSlice from '../features/movies/MovieSlice';
import userReducer from "../features/user/UserSlice";

export default configureStore({
    reducer: {
        user: userReducer,
        movie: MovieSlice,
    },
  })