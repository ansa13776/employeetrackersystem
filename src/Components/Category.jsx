// import axios from 'axios'
// import React, { useEffect, useState } from 'react'
// import { Link } from 'react-router-dom'

// const Category = () => {

//     const [category, setCategory] = useState([])

//     useEffect(()=> {
//         axios.get('http://localhost:3000/auth/category')
//         .then(result => {
//             if(result.data.Status) {
//                 setCategory(result.data.Result);
//             } else {
//                 alert(result.data.Error)
//             }
//         }).catch(err => console.log(err))
//     }, [])
//   return (
//     <div className='px-5 mt-3'>
//         <div className='d-flex justify-content-center'>
//             <h3>Cetegory List</h3>
//         </div>
//         <Link to="/dashboard/add_category" className='btn btn-success'>Add Cetegory</Link>
//         <div className='mt-3'>
//             <table className='table'>
//                 <thead>
//                     <tr>
//                         <th>Name</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {
//                         category.map(c => (
//                             <tr>
//                                 <td>{c.name}</td>
//                             </tr>
//                         ))
//                     }
//                 </tbody>
//             </table>
//         </div>

//     </div>
//   )
// }


//
// Api is not working

// router.get('/category',(req,res) =>{
    // const sql = "SELECT * FROM category";
    // con.query(sql,(err, result) =>{
        // if (err) return res.json({ status: false, Error: "Query Error" });
        // return res.json({ status: true, Result: result });

    // })
// })

// router.post('/add_category',(req, res) =>{
    // const sql = "INSERT INTO categories (name) VALUES (?)"
   // con.query(sql,[req.body.category],(err,result) =>{
        // if (err) return res.json({status :false, Error: "Query Error"})
            // return res.json({status : true})
    // })
// })
//
// export default Category


import React, { useState } from "react";

const Category = () => {
  const [categories, setCategories] = useState([
    { id: 1, name: "Technology" },
    { id: 2, name: "Finance" },
    { id: 3, name: "Health" },
  ]);
  const [newCategoryName, setNewCategoryName] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const handleAddCategory = () => {
    if (newCategoryName.trim() === "") {
      alert("Category name cannot be empty");
      return;
    }
    const newCategory = {
      id: categories.length + 1,
      name: newCategoryName,
    };
    setCategories([...categories, newCategory]);
    setNewCategoryName("");
    setShowPopup(false);
  };

  return (
    <div style={{ padding: "16px", fontFamily: "Arial, sans-serif" }}>
      <div style={{ marginBottom: "16px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h2 style={{ fontSize: "24px", fontWeight: "bold" }}>Categories</h2>
        <button 
          onClick={() => setShowPopup(true)} 
          style={{ padding: "8px 16px", backgroundColor: "#28a745", color: "white", border: "none", borderRadius: "4px", cursor: "pointer" }}
        >
          Add Category
        </button>
      </div>

      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr style={{ backgroundColor: "#f2f2f2" }}>
            <th style={{ border: "1px solid #ddd", padding: "8px", textAlign: "left" }}>ID</th>
            <th style={{ border: "1px solid #ddd", padding: "8px", textAlign: "left" }}>Category Name</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((category) => (
            <tr key={category.id} style={{ borderBottom: "1px solid #ddd" }}>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>{category.id}</td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>{category.name}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {showPopup && (
        <div 
          style={{ 
            position: "fixed", 
            top: 0, 
            left: 0, 
            width: "100%", 
            height: "100%", 
            backgroundColor: "rgba(0, 0, 0, 0.5)", 
            display: "flex", 
            justifyContent: "center", 
            alignItems: "center" 
          }}
        >
          <div 
            style={{ 
              background: "white", 
              padding: "20px", 
              borderRadius: "8px", 
              width: "300px", 
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" 
            }}
          >
            <h3 style={{ marginBottom: "16px" }}>Add New Category</h3>
            <input 
              type="text" 
              value={newCategoryName} 
              onChange={(e) => setNewCategoryName(e.target.value)} 
              placeholder="Category Name" 
              style={{ 
                width: "100%", 
                padding: "8px", 
                marginBottom: "16px", 
                border: "1px solid #ccc", 
                borderRadius: "4px" 
              }}
            />
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <button 
                onClick={handleAddCategory} 
                style={{ 
                  padding: "8px 16px", 
                  backgroundColor: "#007BFF", 
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
                  backgroundColor: "#DC3545", 
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

export default Category;

// import React, { useState } from "react";

// const Category = () => {
//   const [categories, setCategories] = useState([
//     { id: 1, name: "Technology" },
//     { id: 2, name: "Finance" },
//     { id: 3, name: "Health" },
//   ]);

//   const addCategory = () => {
//     const newCategory = {
//       id: categories.length + 1,
//       name: "New Category",
//     };
//     setCategories([...categories, newCategory]);
//   };

//   return (
//     <div style={{ padding: "16px", fontFamily: "Arial, sans-serif" }}>
//       <div style={{ marginBottom: "16px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
//         <h2 style={{ fontSize: "24px", fontWeight: "bold" }}>Categories</h2>
//         <button 
//           onClick={addCategory} 
//           style={{ padding: "8px 16px", backgroundColor: "#28a745", color: "white", border: "none", borderRadius: "4px", cursor: "pointer" }}
//         >
//           Add Category
//         </button>
//       </div>
//       <table style={{ width: "100%", borderCollapse: "collapse" }}>
//         <thead>
//           <tr style={{ backgroundColor: "#f2f2f2" }}>
//             <th style={{ border: "1px solid #ddd", padding: "8px", textAlign: "left" }}>ID</th>
//             <th style={{ border: "1px solid #ddd", padding: "8px", textAlign: "left" }}>Category Name</th>
//           </tr>
//         </thead>
//         <tbody>
//           {categories.map((category) => (
//             <tr key={category.id} style={{ borderBottom: "1px solid #ddd" }}>
//               <td style={{ border: "1px solid #ddd", padding: "8px" }}>{category.id}</td>
//               <td style={{ border: "1px solid #ddd", padding: "8px" }}>{category.name}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default Category;
