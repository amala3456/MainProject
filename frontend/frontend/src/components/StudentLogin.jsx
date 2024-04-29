import React, { useState } from 'react';
import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBBtn,
  MDBIcon,
  MDBInput,
  MDBCheckbox
} from 'mdb-react-ui-kit';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
// import loginImage from '../images/login.png';
// import '../css/StudentLogin.css';

const StudentLogin = () => {
  const [student, setStudent] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const inputHandler = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const loginHandler = () => {
    axios.post('http://localhost:3005/api/studentlog', student)
      .then((res) => {
        if (res.status === 200) {
          alert(res.data.message);
          navigate('/sdash');
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
    <MDBContainer fluid className="p-3 my-5">

      <MDBRow>

        <MDBCol col='10' md='6'>
          <img src="https://assets.materialup.com/uploads/14207bb1-f879-44a5-b833-54d28cfdf869/preview.gif" className="img-fluid" alt="Login" />
        </MDBCol>
        {/* https://image.freepik.com/free-vector/login-concept-illustration_114360-739.jpg */}
        <MDBCol col='4' md='6'>

          <MDBInput wrapperClass='mb-4' label='Email address' id='email' type='email' size="lg" name="email" onChange={inputHandler} value={student.email} />
          <MDBInput wrapperClass='mb-4' label='Password' id='password' type='password' size="lg" name="password" onChange={inputHandler} value={student.password} />

          <div className="d-flex justify-content-between mx-4 mb-4">
            <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
            <Link to="#">Forgot password?</Link>
          </div>

          <MDBBtn className="mb-4 w-100" size="lg" onClick={loginHandler}>Sign in</MDBBtn>

          <div className="divider d-flex align-items-center my-4">
            <p className="text-center fw-bold mx-3 mb-0">OR</p>
          </div>

          <MDBBtn className="mb-4 w-100" size="lg" style={{ backgroundColor: '#3b5998' }}>
            <MDBIcon fab icon="facebook-f" className="mx-2" />
            Continue with Facebook
          </MDBBtn>

          <MDBBtn className="mb-4 w-100" size="lg" style={{ backgroundColor: '#55acee' }}>
            <MDBIcon fab icon="twitter" className="mx-2" />
            Continue with Twitter
          </MDBBtn>

        </MDBCol>

      </MDBRow>

    </MDBContainer>
  );
};

export default StudentLogin;
