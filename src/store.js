// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import anecdoteReducer from './reducers/anecdoteReducer'; // Assume you have this
import filterReducer from './reducers/filterReducer';

const reducer = combineReducers({
  anecdotes: anecdoteReducer,
  filter: filterReducer,
});

const store = configureStore({
  reducer,
});

export default store;