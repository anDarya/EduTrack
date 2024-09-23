import { configureStore } from '@reduxjs/toolkit';
import studentsReducer from './studentsSlice';
import snackbarReducer from './snackbarSlice'

export const store = configureStore({
  reducer: {
    students: studentsReducer,
    snackbar: snackbarReducer,
  },
});