import { createSlice } from "@reduxjs/toolkit";

const GptSlice = createSlice({
    name: "GPT",
    initialState: {
        ShowGPTsearch: false,
    },
    reducers: {
        toggleGPTsearchView: (state, action) => {
            state.ShowGPTsearch = !state.ShowGPTsearch;
        }
    }
});

export const {toggleGPTsearchView} = GptSlice.actions;
export default GptSlice.reducer;