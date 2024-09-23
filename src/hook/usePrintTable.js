import { useReactToPrint } from 'react-to-print';
import { useSelector } from 'react-redux';
import { useMemo } from 'react';
import { MESSAGES } from '../Utils/Messages';
export const usePrintTable = (componentRef, setPage, setRowsPerPage) => {

  const { students } = useSelector((state) => state.students);
  const memoizedStudents = useMemo(() => students, [students]);

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: 'Students List',
    onBeforeGetContent: () =>
      new Promise((resolve) => {
        setPage(0);
        setRowsPerPage(memoizedStudents.length);
        resolve();
      }),
    onAfterPrint: () => {
      setRowsPerPage(10);
      alert(MESSAGES.printComplete);
    },
  });

  return { handlePrint };
};
