import { openSnackbar } from '../Redux/snackbarSlice'; 
import { MESSAGES } from './Messages';

export const toggleStatus = (id, setFilteredStudents, dispatch) => {
  setFilteredStudents(prevStudents => 
    prevStudents.map(student => {
      if (student.id === id) {
        const newStatus = student.status === 0 ? 1 : 0;
        const isDisabled = newStatus === 0;

        dispatch(openSnackbar({ 
          message: isDisabled ? MESSAGES.studentDisabled : MESSAGES.studentEnabled,  
          severity: isDisabled ? 'error' : 'success' 
        }));

        return { ...student, status: newStatus };
      }
      return student;
    })
  );
};
