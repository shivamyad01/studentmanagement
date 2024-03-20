import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Dashboard() {
  const [totalStudents, setTotalStudents] = useState(0);

  useEffect(() => {
    fetchTotalStudents();
  }, []);

  const fetchTotalStudents = async () => {
    try {
      const response = await axios.get('http://localhost:5001/api/totalStudents'); // Replace with your API endpoint
      setTotalStudents(response.data.totalStudents);
    } catch (error) {
      console.error('Error fetching total students:', error);
    }
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100 mt-16">
      <header className="bg-blue-500 text-white p-4">
        <h1 className="text-2xl">Student Management System</h1>
      </header>

      <main className="flex-grow p-4">
        <div className="flex space-x-4">
          <div className="bg-white p-4 rounded shadow">
            <h2 className="text-xl text-blue-500">Total Students</h2>
            <p className="text-4xl font-bold">{totalStudents}</p>
          </div>

          {/* Other statistics components */}
        </div>

        {/* Table component */}
        
      </main>

      <footer className="bg-gray-300 p-4 text-center">
        <p>&copy; 2023 Student Management System</p>
      </footer>
    </div>
  );
}

export default Dashboard;
