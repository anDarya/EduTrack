export const handleChangePage = (setPage) => (event, newPage) => {
  setPage(newPage);
};

export const handleChangeRowsPerPage = (setRowsPerPage, setPage, rowsPerPage) => (event) => {
  setRowsPerPage(parseInt(event.target.value, rowsPerPage));
  setPage(0);
};
