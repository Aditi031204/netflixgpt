import { configureStore } from "@reduxjs/toolkit";
import userReducer  from "./userslice";
import movieReducer from "./moviesSlice";
import gptReducer from "./GptSlice";
import configReducer from "./configSlice";

const appStore = configureStore(
    {
        reducer: {
            user: userReducer,
            movies: movieReducer,
            gpt: gptReducer,
            config: configReducer
        },
    }
);

export default appStore;