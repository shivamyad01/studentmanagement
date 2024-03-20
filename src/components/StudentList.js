import React, { useState, useEffect } from "react";
import axios from "axios";

function StudentList() {
  const [students, setStudents] = useState([]);
  const [filter, setFilter] = useState({ studentName: "" });

  useEffect(() => {
    fetchData();
  }, [filter]);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:5001/api/students", {
        params: filter,
      });
      setStudents(response.data);
    } catch (error) {
      console.error("Error fetching students:", error);
    }
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilter({ ...filter, [name]: value });
  };

  const handleEdit = (id) => {
    // Handle edit functionality
    console.log("Edit student with id:", id);
  };

  const handleRemove = (id) => {
    // Remove the student from the state
    setStudents((prevStudents) => prevStudents.filter((student) => student.id !== id));
  };

  return (
    <div className="bg-white p-6 rounded-md shadow-md mt-16">
      {/* Filter inputs */}
      <div className="flex mb-4">
        <input
          type="text"
          name="studentName"
          value={filter.studentName}
          onChange={handleFilterChange}
          placeholder="Filter by student name"
          className="px-3 py-2 border border-gray-300 rounded-md mr-4 focus:outline-none focus:ring-1 focus:ring-indigo-500"
        />
      </div>
      {/* Student table */}
      <table className="min-w-full divide-y divide-gray-200">
        {/* Table headers */}
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Student Name
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Father's Name
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Mother's Name
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Age
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Home Address
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Registration Date
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        {/* Table body */}
        <tbody className="bg-white divide-y divide-gray-200">
          {students.map((student) => (
            <tr key={student.id}>
              <td className="px-6 py-4 whitespace-nowrap">{student.studentName}</td>
              <td className="px-6 py-4 whitespace-nowrap">{student.fathersName}</td>
              <td className="px-6 py-4 whitespace-nowrap">{student.mothersName}</td>
              <td className="px-6 py-4 whitespace-nowrap">{student.age}</td>
              <td className="px-6 py-4 whitespace-nowrap">{student.homeAddress}</td><td className="px-6 py-4 whitespace-nowrap">
                {student.registrationDate}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <button
                  onClick={() => handleEdit(student.id)}
                  className="text-blue-600 hover:underline mr-2"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleRemove(student.id)}
                  className="text-red-600 hover:underline"
                >
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default StudentList;