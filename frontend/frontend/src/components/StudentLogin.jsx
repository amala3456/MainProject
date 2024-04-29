
import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import loginImage from '../images/login.png';
import axios from 'axios';
import '../css/StudentLogin.css'; // Import your CSS file

const StudentLogin = () => {
  const [student, setStudent] = useState({ email: '', password: '' });
  const navigate = useNavigate(); // Initialize useNavigate hook

  const inputHandler = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const loginHandler = () => {
    axios.post('http://localhost:3005/api/studentlog', student)
      .then((res) => {
        if (res.status === 200) {
          alert(res.data.message);
          navigate('/sdash'); // Navigate to student dashboard upon successful login
        } else {
          throw new Error('Login failed');
        }
      })
      .catch((error) => {
        alert('Error: Unable to login. Please try again later.');
        console.error(error);
      });
  };

  return (
    <div className='studentlog'>
      <div className='login-form'>
        <br />
        <img src={loginImage} alt="" className='logimage' />
        <Typography variant="h5" gutterBottom style={{ color: '#006D5B', fontFamily: 'TimesNewRoman' }}>
          Student Login
        </Typography>
        <br />
        <TextField
          id="email"
          label="Email"
          variant="outlined"
          name="email"
          onChange={inputHandler}
          value={student.email}
          className='input'
        />
        <br /><br />
        <TextField
          id="password"
          label="Password"
          variant="outlined"
          type="password"
          name="password"
          onChange={inputHandler}
          value={student.password}
          className='input'
        />
        <br /><br />
        <Button variant="contained" 
        style={{width:'45%',borderRadius:'50px',backgroundColor:'#006D5B'}}
        onClick={loginHandler}>Login</Button>
        <br />
        <Typography style={{fontFamily:'TimesNewRoman'}}>
          Not a student? <Link to="/adminlog" style={{textDecoration:'none',color:'#006D5B',fontFamily:'TimesNewRoman'}}>Admin Login</Link>
        </Typography>
      </div>
    </div>
  );
};

export default StudentLogin;
