import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies: null,
        nowPopularMovies: null,
        nowTopRated: null,
        nowUpcomingMovies: null,
        VideoTrailer: null,
    },
    reducers: {
        addNowPlayingMovies: (state, action)=>{
            state.nowPlayingMovies = action.payload;
        },
        addPopularMovies: (state, action)=>{
            state.nowPopularMovies = action.payload;
        },
        addTopRated: (state, action)=>{
            state.nowTopRated = action.payload;
        },
        addUpcomingMovies: (state, action)=>{
            state.nowUpcomingMovies = action.payload;
        },
        addVideoTrailer : (state, action) => {
            state.VideoTrailer = action.payload;
        }
    }
});

export const {addNowPlayingMovies, addVideoTrailer, addPopularMovies, addTopRated, addUpcomingMovies} = moviesSlice.actions
export default moviesSlice.reducer;