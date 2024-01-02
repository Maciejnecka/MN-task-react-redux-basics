// src/reducers/index.js
import { combineReducers } from 'redux';
import { meetingsSlice } from '../actions/meetingsSlice';

const rootReducer = combineReducers({
  meetings: meetingsSlice.reducer,
});

export default rootReducer;
