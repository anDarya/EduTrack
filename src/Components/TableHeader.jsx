import React from 'react';
import { TableCell, TableRow, TableSortLabel, TableHead } from '@mui/material';
import { handleSort } from '../Utils/SortTable';

const TableHeader = React.memo(({ order, orderBy, setOrder, setOrderBy }) => {

 const sortHandler = handleSort(order, orderBy, setOrder, setOrderBy);

  return (
    <TableHead>
      <TableRow>
        <TableCell>
          <TableSortLabel
            active={orderBy === 'name'}
            direction={orderBy === 'name' ? order : 'asc'}
            onClick={() => sortHandler('name')}
          >
            Name
          </TableSortLabel>
        </TableCell>
        <TableCell align="right">
          <TableSortLabel
            active={orderBy === 'age'}
            direction={orderBy === 'age' ? order : 'asc'}
            onClick={() => sortHandler('age')}
          >
            Age
          </TableSortLabel>
        </TableCell>
        <TableCell align="right">
          <TableSortLabel
            active={orderBy === 'idnp'}
            direction={orderBy === 'idnp' ? order : 'asc'}
            onClick={() => sortHandler('idnp')}
          >
            IDNP
          </TableSortLabel>
        </TableCell>
        <TableCell align="right">Status</TableCell>
        <TableCell align="right">Actions</TableCell>
      </TableRow>
    </TableHead>
  );
})
export default TableHeader;
