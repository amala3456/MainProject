import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import EmailIcon from '@mui/icons-material/Email';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#003E33', // Change background color of heading
    color: theme.palette.common.white,
    padding: "10px", // Adjusting padding
    textAlign: 'center', // Align contents centrally
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 16,
    padding: "9px", // Adjusting padding
    textAlign: 'center', // Align contents centrally
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function Sdsa() {
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
      <Typography variant="h3" style={{ fontWeight: "500", margin: "40px", marginBottom: "40px", fontFamily: "Arial, sans-serif",fontSize:"40px" }}>
        KKEM March DSA
      </Typography>

      <TableContainer component={Paper} style={{ maxWidth: "700px", margin: "auto" }}> {/* Adjusting table width */}
        <Table aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Name</StyledTableCell>
              <StyledTableCell>Email</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user, index) => (
              <StyledTableRow key={index}>
                <StyledTableCell component="th" scope="row">
                  {user.name}
                </StyledTableCell>
                <StyledTableCell align="center">{user.email}</StyledTableCell> {/* Aligning contents centrally */}
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
               <div style={{margin:"25px"}}>  
                <a href="@gmail.com" style={{ textDecoration: "none" }}>
                <EmailIcon color="success" fontSize="large" /> {/* Increase size of EmailIcon */}
               </a>
              </div>
    </div>
  );
};

export default Sdsa;

//


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




