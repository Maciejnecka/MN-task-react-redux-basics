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
    deleteMeeting(state, action) {
      const { id } = action.payload;
      state.meetings = state.meetings.filter((meeting) => meeting.id !== id);
    },
  },
});

export const actions = meetingsSlice.actions;
