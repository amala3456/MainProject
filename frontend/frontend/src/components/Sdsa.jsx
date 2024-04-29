// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const Sdsa = () => {
//   const [users, setUsers] = useState([]);
//     const [selectedBatch, setSelectedBatch] = useState(''); // State to store selected batch


//   useEffect(() => {
//     const fetchUsers = async () => {
//       try {
//         const response = await axios.get('http://localhost:3005/api/students'); // Changed to GET request
//         setUsers(response.data);
//       } catch (error) {
//         console.error('Error fetching users:', error);
//       }
//     };

//     fetchUsers();
//   }, []);
//     // Function to filter users based on batch
//   const filterUsersByBatch = () => {
//     return users.filter(user => user.batch === selectedBatch);
//   };

//   return (
//     <div>
//       <h2>User Table</h2>
//        <label>Select Batch:</label>
//       < select value={selectedBatch} onChange={e => setSelectedBatch(e.target.value)}>
//         <option value="">All Batches</option>
//         <option value="KKEM March DSA">KKEM March DSA</option>
//         <option value="KKEM March FSD">KKEM March FSD</option>
//         <option value="KKEM March MLAI">KKEM March MLAI</option>
//         <option value="KKEM March CSA">KKEM March CSA</option>
//         <option value="KKEM March ST">KKEM March ST</option>
       
//         {/* Add more options as needed */}
//       </select>
//       <table>
//         <thead>
//           <tr>
//             <th>Name</th><br/>
//             <th>Email</th>
//           </tr>
//         </thead>
//         <tbody>
//           {/* Map filtered users instead of all users  */}
//          {filterUsersByBatch().map((user, index) => (
//             <tr key={index}>
//               <td>{user.name}</td>
//               <td>{user.email}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default Sdsa;





import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Sdsa = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:3005/api/students');
        // Filter users belonging to "KKEM March DSA" batch
        const filteredUsers = response.data.filter(user => user.batch === 'KKEM March DSA');
        setUsers(filteredUsers);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div>
      <h2>User Table</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Sdsa;