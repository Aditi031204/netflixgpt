import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies: null,
        VideoTrailer: null,
    },
    reducers: {
        addNowPlayingMovies: (state, action)=>{
            state.nowPlayingMovies = action.payload;
        },
        addVideoTrailer : (state, action) => {
            state.VideoTrailer = action.payload;
        }
    }
});

export const {addNowPlayingMovies, addVideoTrailer} = moviesSlice.actions
export default moviesSlice.reducer;