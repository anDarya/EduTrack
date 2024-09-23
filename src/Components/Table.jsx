import React, { useEffect, useCallback, useRef, useState } from 'react';
import { Button, Table, TableBody, TableContainer, Paper, TablePagination } from '@mui/material';
import debounce from 'lodash.debounce';
import { usePrintTable } from '../hook/usePrintTable';
import { useDispatch, useSelector } from 'react-redux';
import { setStudents } from '../Redux/studentsSlice';
import { handleChangePage, handleChangeRowsPerPage } from '../Utils/Pagination';
import { sortingByOrder } from '../Utils/SortTable';
import { filterByDate } from '../Utils/FilterTable';
import { validateIDNP } from '../Utils/Validation';
import { MESSAGES } from '../Utils/Messages';

const Filters = React.lazy(() => import('./Filters'));
const TableHeader = React.lazy(() => import('./TableHeader'));
const TableContent = React.lazy(() => import('./TableContent'));

const StudentsTable = React.memo(() => {

  const dispatch = useDispatch();
  const componentRef = useRef();
  const { students, searchQuery, startDate, endDate } = useSelector((state) => state.students);
  const [order, setOrder] = useState('asc');
  const [orderBy, setOrderBy] = useState('name');
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [filteredStudents, setFilteredStudents] = useState([]);
  const [sortedStudents, setSortedStudents] = useState([]);
  
 const { handlePrint } = usePrintTable(componentRef, setPage, setRowsPerPage);

  useEffect(() => {
    fetch("/api/students")
      .then((response) => response.json())
      .then((data) => {
        dispatch(setStudents(data.students));
        setFilteredStudents(data.students);
      })
      .catch((error) => console.error(MESSAGES.fetchError, error));
  }, [dispatch]);

  useEffect(() => {
    const sorted = sortingByOrder(filteredStudents, orderBy, order);
    setSortedStudents(sorted);
  }, [filteredStudents, orderBy, order]);

  const debouncedFilter = useCallback(
    debounce(() => {  
       if (!searchQuery.trim() && !startDate && !endDate ) {
        setFilteredStudents(students);
        return;
      }
      const filteredByQuery = students.filter(student => {
        const matchesName = student.name.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesIDNP = validateIDNP(searchQuery) && student.idnp.includes(searchQuery);
        
        return matchesName || matchesIDNP;
      });

      const filteredData = startDate || endDate 
      ? filterByDate(filteredByQuery, startDate, endDate) 
      : filteredByQuery;

      setFilteredStudents(filteredData);

    }, 300)
  );

  useEffect(() => {
    debouncedFilter()
  }, [searchQuery, startDate, endDate]);

  return (
    <>
        <Filters searchQuery={searchQuery} endDate={endDate} startDate={startDate}/>
        <Button onClick={handlePrint} variant="contained" color="primary" style={{ marginBottom: '16px' }}>
            Print table
        </Button>
        <div ref={componentRef}>
            <TableContainer component={Paper}>
                <Table>
                    <TableHeader order={order} orderBy={orderBy} setOrder={setOrder} setOrderBy={setOrderBy} key='header'/>
                    <TableBody>
                        {sortedStudents
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((student, index) => (
                                <TableContent student={student} setFilteredStudents={setFilteredStudents} key={index}/>                          
                            ))}
                    </TableBody>
                </Table>
            </TableContainer>     

            <TablePagination
            component="div"
            count={sortedStudents.length}
            page={page}
            onPageChange={handleChangePage(setPage)}
            rowsPerPage={rowsPerPage} 
            onRowsPerPageChange={handleChangeRowsPerPage(setRowsPerPage, setPage, rowsPerPage)}
            />

        </div>
    </>
  );
})

export default StudentsTable;