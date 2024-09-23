import React from 'react';
import { TextField } from '@mui/material';
import { useDispatch } from 'react-redux';
import { setSearchQuery, setStartDate, setEndDate } from '../Redux/studentsSlice';
import { openSnackbar } from '../Redux/snackbarSlice';
import { MESSAGES } from '../Utils/Messages';

  const Filters = React.memo(({ searchQuery, startDate, endDate }) => {

    const dispatch = useDispatch();

    const validateInput = (query, dispatch) => {
      const startsWithDigit = /^\d/.test(query);
      const idnpRegex = /^\d+$/;
      const nameRegex = /^[a-zA-Z\s]+$/;

      if (startsWithDigit) {
        if (!idnpRegex.test(query)) {
          dispatch(openSnackbar({ message: MESSAGES.invalidIDNP, severity: 'error' }));
          return false;
        }
      } else {
        if (!nameRegex.test(query)) {
          dispatch(openSnackbar({ message: MESSAGES.invalidName, severity: 'error' }));
          return false;
        }
      }
      return true;
    };

    const onSearchChange = (event) => {
      const query = event.target.value.trim();

      if (query.length === 0) {
        dispatch(setSearchQuery(query));
        return;
      }

      const isValid = validateInput(query, dispatch);

      if (isValid) {
        dispatch(setSearchQuery(query));
      }
    };

    const onStartDateChange = (event) => { 
      const date = event.target.value;
      dispatch(setStartDate(date));
      if (endDate && new Date(date) > new Date(endDate)) {
        dispatch(setEndDate(''));
      }
    };

    const onEndDateChange = (event) => {
      const date = event.target.value;
      dispatch(setEndDate(date));
      if (startDate && new Date(date) < new Date(startDate)) {
        dispatch(setStartDate(''));
      }
    };

    return (
      <div style={{ margin: '16px 0' }}>
        <TextField
          label="Search"
          variant="outlined"
          value={searchQuery}
          onChange={onSearchChange}
          style={{ marginRight: '16px' }}
        />
        <TextField
          label="Start Date"
          type="date"
          value={startDate}
          onChange={onStartDateChange}
          style={{ marginRight: '16px' }}
          InputLabelProps={{ shrink: true }}
        />
        <TextField
          label="End Date"
          type="date"
          value={endDate}
          onChange={onEndDateChange}
          InputLabelProps={{ shrink: true }}
        />
      </div>
    );
  });

export default Filters;
