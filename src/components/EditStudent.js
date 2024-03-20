// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { useParams, useHistory } from "react-router-dom";

// const EditStudent = () => {
//   const { id } = useParams();
//   const history = useHistory();

//   const [formData, setFormData] = useState({
//     studentName: "",
//     fathersName: "",
//     mothersName: "",
//     age: "",
//     homeAddress: "",
//     registrationDate: "",
//   });

//   useEffect(() => {
//     fetchStudent();
//   }, []);

//   const fetchStudent = async () => {
//     try {
//       const response = await axios.get(`http://localhost:5001/api/students/${id}`);
//       setFormData(response.data);
//     } catch (error) {
//       console.error("Error fetching student:", error);
//     }
//   };

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       await axios.put(`http://localhost:5001/api/students/${id}`, formData);
//       history.push("/students");
//     } catch (error) {
//       console.error("Error updating student:", error);
//     }
//   };

//   return (
//     <div className="bg-white p-6 rounded-md shadow-md mt-16">
//       <h2 className="text-2xl font-bold mb-4">Edit Student</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="mb-4">
//           <label htmlFor="studentName" className="block text-gray-700 font-bold mb-2">
//             Student Name
//           </label>
//           <input
//             type="text"
//             name="studentName"
//             value={formData.studentName}
//             onChange={handleChange}
//             className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-500"
//           />
//         </div>
//         <div className="mb-4">
//           <label htmlFor="fathersName" className="block text-gray-700 font-bold mb-2">
//             Father's Name
//           </label>
//           <input
//             type="text"
//             name="fathersName"
//             value={formData.fathersName}
//             onChange={handleChange}
//             className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-500"
//           />
//         </div>
//         <div className="mb-4">
//           <label htmlFor="mothersName" className="block text-gray-700 font-bold mb-2">
//             Mother's Name
//           </label>
//           <input
//             type="text"
//             name="mothersName"
//             value={formData.mothersName}
//             onChange={handleChange}
//             className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-500"
//           />
//         </div>
//         <div className="mb-4">
//           <label htmlFor="age" className="block text-gray-700 font-bold mb-2">
//             Age
//           </label>
//           <input
//             type="text"
//             name="age"
//             value={formData.age}
//             onChange={handleChange}
//             className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-500"
//           />
//         </div>
//         <div className="mb-4">
//           <label htmlFor="homeAddress" className="block text-gray-700 font-bold mb-2">
//             Home Address
//           </label>
//           <textarea
//             name="homeAddress"
//             value={formData.homeAddress}
//             onChange={handleChange}
//             className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-500"
//           ></textarea>
//         </div>
//         <div className="mb-4">
//           <label htmlFor="registrationDate" className="block text-gray-700 font-bold mb-2">
//             Registration Date
//           </label>
//           <input
//             type="date"
//             name="registrationDate"
//             value={formData.registrationDate}
//             onChange={handleChange}
//             className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-500"
//           />
//         </div>
//         <div className="mb-4">
//           <button
//             type="submit"
//             className="w-full py-2 px-4 bg-indigo-600 rounded-md hover:bg-indigo-700 text-white font-bold"
//           >
//             Update Student
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default EditStudent;
