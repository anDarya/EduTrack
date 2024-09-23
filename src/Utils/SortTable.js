export const sortingByOrder = (students, orderBy, order) => {
  return [...students].sort((a, b) => {
    if (orderBy === 'age') {
      return order === 'asc' ? a[orderBy] - b[orderBy] : b[orderBy] - a[orderBy];
    } else {
      return order === 'asc'
        ? a[orderBy].localeCompare(b[orderBy])
        : b[orderBy].localeCompare(a[orderBy]);
    }
  });
};

export const handleSort = (order, orderBy, setOrder, setOrderBy) => (property) => {
  const isAsc = orderBy === property && order === 'asc';
  setOrder(isAsc ? 'desc' : 'asc');
  setOrderBy(property);
};
