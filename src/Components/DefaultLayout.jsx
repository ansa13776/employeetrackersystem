
// import React from 'react'
// // import './App.css'

// // import Login from './Components/Login'
// import {BrowserRouter, Routes, Route, Outlet} from  'react-router-dom'
// // import Dashboard from './Components/Dashboard'


// function DefaultLayout(){
//   return(
//     <><div>
//     {/* <h1>sidebar</h1>

// </div>
// <div>
//     <h2>header</h2>
// </div>
// <div>
//     <h1>body</h1> */}


//     <Outlet />
// </div>
    
    
//     </>
    
  
//   )
// }

// export default DefaultLayout;


import React, { useState } from "react";

const DefaultLayout = () => {
  const [employees, setEmployees] = useState([
    { id: 1, name: "John Doe", role: "Software Engineer", department: "IT", email: "john.doe@example.com" },
    { id: 2, name: "Jane Smith", role: "Project Manager", department: "Operations", email: "jane.smith@example.com" },
  ]);
  const [showPopup, setShowPopup] = useState(false);
  const [newEmployee, setNewEmployee] = useState({
    name: "",
    role: "",
    department: "",
    email: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewEmployee((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddEmployee = () => {
    if (
      newEmployee.name.trim() === "" ||
      newEmployee.role.trim() === "" ||
      newEmployee.department.trim() === "" ||
      newEmployee.email.trim() === ""
    ) {
      alert("All fields are required.");
      return;
    }

    setEmployees((prev) => [
      ...prev,
      { id: prev.length + 1, ...newEmployee },
    ]);
    setNewEmployee({ name: "", role: "", department: "", email: "" });
    setShowPopup(false);
  };

  return (
    <div style={{ padding: "16px", fontFamily: "Arial, sans-serif" }}>
      <div style={{ marginBottom: "16px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h2 style={{ fontSize: "24px", fontWeight: "bold" }}>Employee Table</h2>
        <button 
          onClick={() => setShowPopup(true)} 
          style={{ padding: "8px 16px", backgroundColor: "#007BFF", color: "white", border: "none", borderRadius: "4px", cursor: "pointer" }}
        >
          Add Employee
        </button>
      </div>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr style={{ backgroundColor: "#f2f2f2" }}>
            <th style={{ border: "1px solid #ddd", padding: "8px", textAlign: "left" }}>ID</th>
            <th style={{ border: "1px solid #ddd", padding: "8px", textAlign: "left" }}>Name</th>
            <th style={{ border: "1px solid #ddd", padding: "8px", textAlign: "left" }}>Role</th>
            <th style={{ border: "1px solid #ddd", padding: "8px", textAlign: "left" }}>Department</th>
            <th style={{ border: "1px solid #ddd", padding: "8px", textAlign: "left" }}>Email</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id} style={{ borderBottom: "1px solid #ddd" }}>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>{employee.id}</td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>{employee.name}</td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>{employee.role}</td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>{employee.department}</td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>{employee.email}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {showPopup && (
        <div style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}>
          <div style={{
            background: "white",
            padding: "20px",
            borderRadius: "8px",
            width: "300px",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)"
          }}>
            <h3 style={{ marginBottom: "16px" }}>Add New Employee</h3>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={newEmployee.name}
              onChange={handleInputChange}
              style={{ width: "100%", padding: "8px", marginBottom: "8px", border: "1px solid #ccc", borderRadius: "4px" }}
            />
            <input
              type="text"
              name="role"
              placeholder="Role"
              value={newEmployee.role}
              onChange={handleInputChange}
              style={{ width: "100%", padding: "8px", marginBottom: "8px", border: "1px solid #ccc", borderRadius: "4px" }}
            />
            <input
              type="text"
              name="department"
              placeholder="Department"
              value={newEmployee.department}
              onChange={handleInputChange}
              style={{ width: "100%", padding: "8px", marginBottom: "8px", border: "1px solid #ccc", borderRadius: "4px" }}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={newEmployee.email}
              onChange={handleInputChange}
              style={{ width: "100%", padding: "8px", marginBottom: "16px", border: "1px solid #ccc", borderRadius: "4px" }}
            />
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <button
                onClick={handleAddEmployee}
                style={{
                  padding: "8px 16px",
                  backgroundColor: "#28a745",
                  color: "white",
                  border: "none",
                  borderRadius: "4px",
                  cursor: "pointer"
                }}
              >
                Add
              </button>
              <button
                onClick={() => setShowPopup(false)}
                style={{
                  padding: "8px 16px",
                  backgroundColor: "#dc3545",
                  color: "white",
                  border: "none",
                  borderRadius: "4px",
                  cursor: "pointer"
                }}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DefaultLayout;


// import React, { useState } from "react";

// const DefaultLayout = () => {
//   const [employees, setEmployees] = useState([
//     { id: 1, name: "John Doe", role: "Software Engineer", department: "IT", email: "john.doe@example.com" },
//     { id: 2, name: "Jane Smith", role: "Project Manager", department: "Operations", email: "jane.smith@example.com" },
//   ]);

//   const addEmployee = () => {
//     const newEmployee = {
//       id: employees.length + 1,
//       name: "New Employee",
//       role: "New Role",
//       department: "New Department",
//       email: "new.employee@example.com",
//     };
//     setEmployees([...employees, newEmployee]);
//   };

//   return (
//     <div style={{ padding: "16px", fontFamily: "Arial, sans-serif" }}>
//       <div style={{ marginBottom: "16px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
//         <h2 style={{ fontSize: "24px", fontWeight: "bold" }}>Employee Table</h2>
//         <button 
//           onClick={addEmployee} 
//           style={{ padding: "8px 16px", backgroundColor: "#007BFF", color: "white", border: "none", borderRadius: "4px", cursor: "pointer" }}
//         >
//           Add Employee
//         </button>
//       </div>
//       <table style={{ width: "100%", borderCollapse: "collapse" }}>
//         <thead>
//           <tr style={{ backgroundColor: "#f2f2f2" }}>
//             <th style={{ border: "1px solid #ddd", padding: "8px", textAlign: "left" }}>ID</th>
//             <th style={{ border: "1px solid #ddd", padding: "8px", textAlign: "left" }}>Name</th>
//             <th style={{ border: "1px solid #ddd", padding: "8px", textAlign: "left" }}>Role</th>
//             <th style={{ border: "1px solid #ddd", padding: "8px", textAlign: "left" }}>Department</th>
//             <th style={{ border: "1px solid #ddd", padding: "8px", textAlign: "left" }}>Email</th>
//           </tr>
//         </thead>
//         <tbody>
//           {employees.map((employee) => (
//             <tr key={employee.id} style={{ borderBottom: "1px solid #ddd" }}>
//               <td style={{ border: "1px solid #ddd", padding: "8px" }}>{employee.id}</td>
//               <td style={{ border: "1px solid #ddd", padding: "8px" }}>{employee.name}</td>
//               <td style={{ border: "1px solid #ddd", padding: "8px" }}>{employee.role}</td>
//               <td style={{ border: "1px solid #ddd", padding: "8px" }}>{employee.department}</td>
//               <td style={{ border: "1px solid #ddd", padding: "8px" }}>{employee.email}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default DefaultLayout;

