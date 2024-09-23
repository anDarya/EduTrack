import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  students: [],
  searchQuery: '',
  startDate: '',
  endDate: '',
};

const studentsSlice = createSlice({
  name: 'students',
  initialState,
  reducers: {
    setStudents: (state, action) => {
      state.students = action.payload;
    },
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
    setStartDate: (state, action) => {
      state.startDate = action.payload;
    },
    setEndDate: (state, action) => {
      state.endDate = action.payload;
    },
  },
});

export const { setStudents, setSearchQuery, setStartDate, setEndDate } = studentsSlice.actions;

export default studentsSlice.reducer;
