import React from 'react';
import StudentsTable from '../Components/Table';
import SnackbarComponent from '../Notification';

function App() {
  return (
    <div className="App">
      <h1>Student Management System</h1>
      <StudentsTable />
      <SnackbarComponent />
    </div>
  );
}

export default App;

