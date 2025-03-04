import { createSlice } from "@reduxjs/toolkit";

const GptSlice = createSlice({
    name: "GPT",
    initialState: {
        ShowGPTsearch: false,
        MovieNames: null,
        MovieResults: null,
    },
    reducers: {
        toggleGPTsearchView: (state, action) => {
            state.ShowGPTsearch = !state.ShowGPTsearch;
        },
        addGenMovieResults: (state, action) => {
            const {MovieNames , MovieResults} = action.payload;
            state.MovieNames = MovieNames;
            state.MovieResults = MovieResults;
        },
    }
});

export const {toggleGPTsearchView, addGenMovieResults} = GptSlice.actions;
export default GptSlice.reducer;