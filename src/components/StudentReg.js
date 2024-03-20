import React, { useState } from 'react';
import axios from 'axios';

const StudentReg = () => {
  const [formData, setFormData] = useState({
    studentName: '',
    fathersName: '',
    mothersName: '',
    age: '',
    homeAddress: '',
    registrationDate: '',
  });
  const [registrationMessage, setRegistrationMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5001/api/students', formData);
      console.log('Student registered successfully');
      setRegistrationMessage('Student registered successfully');
      setFormData({
        studentName: '',
        fathersName: '',
        mothersName: '',
        age: '',
        homeAddress: '',
        registrationDate: '',
      });
    } catch (error) {
      console.error('Error registering student:', error);
      setRegistrationMessage('Error registering student');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-md shadow-md w-full max-w-md"
      >
        <h1 className="text-2xl font-bold mb-4 text-center text-indigo-600">Student Registration</h1>
        
        <div className="mb-4">
          <label htmlFor="studentName" className="block text-sm font-medium text-gray-700">
            Student Name
          </label>
          <input
            type="text"
            id="studentName"
            name="studentName"
            value={formData.studentName}
            onChange={handleChange}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="fathersName" className="block text-sm font-medium text-gray-700">
            Father's Name
          </label>
          <input
            type="text"
            id="fathersName"
            name="fathersName"
            value={formData.fathersName}
            onChange={handleChange}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="mothersName" className="block text-sm font-medium text-gray-700">
            Mother's Name
          </label>
          <input
            type="text"
            id="mothersName"
            name="mothersName"
            value={formData.mothersName}
            onChange={handleChange}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="age" className="block text-sm font-medium text-gray-700">
            Age
          </label>
          <input
            type="number"
            id="age"
            name="age"
            value={formData.age}
            onChange={handleChange}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="homeAddress" className="block text-sm font-medium text-gray-700">
            Home Address
          </label>
          <input
            type="text"
            id="homeAddress"
            name="homeAddress"
            value={formData.homeAddress}
            onChange={handleChange}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="registrationDate" className="block text-sm font-medium text-gray-700">
            Registration Date
          </label>
          <input
            type="date"
            id="registrationDate"
            name="registrationDate"
            value={formData.registrationDate}
            onChange={handleChange}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <div className="mb-4 text-center">
          <button
            type="submit"
            className="inline-block px-4 py-2 bg-indigo-600 border border-transparent rounded-md text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Register
          </button>
        </div>
        {registrationMessage && (
        <div className={`bg-${registrationMessage.includes('successfully') ? 'green' : 'red'}-200 text-${registrationMessage.includes('successfully') ? 'green' : 'red'}-700 p-2 mb-4 rounded text-center`}>
          {registrationMessage}
        </div>
      )}
      </form>
      
    </div>
  );
};

export default StudentReg;
