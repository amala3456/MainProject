import React, { useState } from 'react';
import axios from 'axios';
import '../css/AdminLogin.css';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate

const AdminLogin = () => {
    const [admin, setAdmin] = useState({
        username: '',
        password: ''
    });

    const navigate = useNavigate();

    const inputHandler = (e) => {
        setAdmin({ ...admin, [e.target.name]: e.target.value });
    };

    const loginHandler = (e) => {
        e.preventDefault(); // Prevent default form submission
        if (admin.username === 'admin' && admin.password === 'admin@123') {
            axios.post('http://localhost:3005/api/adminlog', admin)
                .then((res) => {
                    if (res.status === 200) {
                        alert(res.data.message);
                        navigate('/admindash'); // Navigate to admin dashboard upon successful login
                    } else {
                        throw new Error('Login failed');
                    }
                })
                .catch((error) => {
                    alert('Error: Unable to login. Please try again later.');
                    console.error(error);
                });
        } else {
            alert('Invalid username or password');
        }
    };

    return (
        <div className='wrapper'>
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
                </div>

                <div className="remember-forgot">
                    <label><input type="checkbox" />Remember me</label>
                    <a href="#">Forget password</a>
                </div>

                <button type="submit" onClick={loginHandler}>Login</button>

                <div className="register-link">
                    <p>Don't have an account? <a href="#">Register</a></p>
                </div>
            </form>
        </div>
    );
};

export default AdminLogin;
