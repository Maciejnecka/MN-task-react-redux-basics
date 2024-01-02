import { createSlice } from '@reduxjs/toolkit';

export const meetingsSlice = createSlice({
  name: 'meetings',
  initialState: { meetings: [] },
  reducers: {
    loadMeetings(state, { payload }) {
      state.meetings = payload;
    },
    saveMeeting(state, action) {
      const { meeting } = action.payload;
      state.meetings = [...state.meetings, meeting];
    },
  },
});

export const actions = meetingsSlice.actions;
