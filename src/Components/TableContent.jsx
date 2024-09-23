import React from 'react';
import { TableRow, TableCell, Button } from '@mui/material';
import { toggleStatus } from '../Utils/ToggleStatus';
import { useDispatch } from 'react-redux';

const TableContent = React.memo(({ student, setFilteredStudents}) => {

  const dispatch = useDispatch();

  return (
    <TableRow
      key={student.id}
      style={{ backgroundColor: student.status === 0 ? '#a8daf5' : 'white' }}
    >
      <TableCell>{student.name}</TableCell>
      <TableCell align="right">{student.age}</TableCell>
      <TableCell align="right">{student.idnp}</TableCell>
      <TableCell align="right">{student.status === 0 ? 'Expelled' : 'Study'}</TableCell>
      <TableCell align="right">
        <Button
          variant="contained"
          color={student.status === 0 ? 'info' : 'error'}
          onClick={() =>  toggleStatus(student.id, setFilteredStudents, dispatch)}
        >
          {student.status === 0 ? 'Enable' : 'Delete'}
        </Button>
      </TableCell>
    </TableRow>
  );
});

export default TableContent;
