import React, { useState } from 'react';
import axios from 'axios';
import '../css/AdminLogin.css';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import { Button } from '@mui/material';

const AdminLogin = () => {
    const navigate = useNavigate();

    const [admin, setAdmin] = useState({ username: '', password: '' });
  
    const inputHandler = (e) => {
      setAdmin({ ...admin, [e.target.name]: e.target.value });
    };

    const addHandler = () => {
        axios.post('http://localhost:3005/api/adminlog', admin)
          .then((res) => {
            if (res.data.message === 'Login successful') {
              alert('Login successful');
              navigate('/admindash');
            } else {
              alert('Login failed');
            }
          })
          .catch((error) => {
            alert('Login failed');
            console.log(error);
          });
    };

    return (
        <div className='bg'>
            <div className='wrapper'>
                <div className='form-box adminlogin'>
                    <form>
                        <h1>AdminLogin</h1>
                        <div className="input-box">
                            <input
                                type="text"
                                placeholder='username'
                                name='username'
                                onChange={inputHandler}
                                value={admin.username}
                                required
                            />
                            <i className='bx bxs-user'></i>
                        </div>
                        <div className="input-box">
                            <input
                                type="password"
                                placeholder='password'
                                name='password'
                                onChange={inputHandler}
                                value={admin.password}
                                required
                            />
                            <i className='bx bxs-lock-alt'></i>
                        </div>
                        <Button type="button" className='btn' onClick = { addHandler }>Login</Button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AdminLogin;


// import React, { useState } from 'react';
// import axios from 'axios';
// import '../css/AdminLogin.css';
// import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate

// const AdminLogin = () => {
//     const navigate = useNavigate();

//     const [admin, setAdmin] = useState({ username: '', password: '' });
  
//     const inputHandler = (e) => {
//       setAdmin({ ...admin, [e.target.name]: e.target.value });
//     };
// }
// const addHandler = () => {
//     axios.post('http://localhost:3005/api/adminlog', admin)
//       .then((res) => {
//         if (res.data.message === 'Login successful') {
//           alert('Login successful');
//           navigate('/admindash');
//         } else {
//           alert('Login failed');
//         }
//       })
//       .catch((error) => {
//         alert('Login failed');
//         console.log(error);
//       });
//   };
   

//     return (
//          <div className='bg'>
//         <div className='wrapper'>
//             <div className='form-box adminlogin'>
//             <form>
//                 <h1>AdminLogin</h1>
//                 <div className="input-box">
//                     <input
//                         type="text"
//                         placeholder='username'
//                         name='username'
//                         onChange={inputHandler}
//                         value={admin.username}
//                         required
//                     />
//                     <i className='bx bxs-user'></i>
//                 </div>
//                 <div className="input-box">
//                     <input
//                         type="password"
//                         placeholder='password'
//                         name='password'
//                         onChange={inputHandler}
//                         value={admin.password}
//                         required
//                     />
//                     <i className='bx bxs-lock-alt'></i>
//                 </div>

//                 <button type="submit" className='btn' onClick={addHandler}>Login</button>


                
    
            
//             </form>
            
//             </div>

//             </div>
//             </div>
        
//     );

// export default AdminLogin;

