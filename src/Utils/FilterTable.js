export const filterByDate = (students, startDateFilter, endDateFilter) => {
  const filterStartDate = startDateFilter ? new Date(startDateFilter) : null;
  const filterEndDate = endDateFilter ? new Date(endDateFilter) : null;

  return students.filter(student => {
    const studentStartDate = new Date(student.startDate);
    const studentEndDate = student.endDate ? new Date(student.endDate) : null;

    // filterStartDate care se contin in perioada cand studentul este inscris 
    const startDateValid = filterStartDate >= studentStartDate 

    if (!filterEndDate) {
      return startDateValid;
    }

    // filterEndDate in perioada cand studentul are endDate si filterEndDate sa fie in perioada cat studentul a invatat sau egal cu studentEndDate
    const endDateValid = studentEndDate ? filterEndDate <= studentEndDate : false

    return startDateValid && endDateValid;
  });
};
