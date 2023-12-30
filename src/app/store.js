// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';

import { meetingsSlice } from '../meetings/meetingsSlice';

export const store = configureStore({
  reducer: meetingsSlice.reducer,
});
