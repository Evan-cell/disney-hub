import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    recommend :'null',
    newDisney: 'null',
    originals: 'null',
    trending: 'null',
}
const movieSlice = createSlice({
    name: 'movie',
    initialState,
    reducers: {
        setMovies: (state, action) =>{
            state.recommend = action.payload.recommend
            state.newDisney = action.payload.newDisney
            state.originals = action.payload.original
            state.trending = action.payload.trending
        }
    }
})
export const {setMovies} = movieSlice.actions

export const selectRecommend = state => state.movie.recommend
export const selectneNewDisney= state => state.movie.newDisney
export const selectOriginals = state => state.movie.originals
export const selectTrending = state => state.movie.trending

export default movieSlice.reducer