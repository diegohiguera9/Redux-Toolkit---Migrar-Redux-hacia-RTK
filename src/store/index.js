import { configureStore } from '@reduxjs/toolkit';
import countReducer from "./reducers/Count.reducer";
import textReducer from "./reducers/Text.reducer";
import postsReducer from "./reducers/Posts.reducer";

const store = configureStore({
  reducer:{
    countReducer,
    textReducer,
    postsReducer    
  }
})

export default store;