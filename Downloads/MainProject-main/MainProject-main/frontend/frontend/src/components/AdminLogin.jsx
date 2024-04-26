import React from 'react';
import '../css/AdminLogin.css';
// import { FaUser, FaLock } from "react-icons/fa";

const AdminLogin = () => {
  return (
    <div className='wrapper'>
        <form action="">
            <h1>AdminLogin</h1>
            <div className="input-box">
                <input type="text" placeholder='username' required />
                {/* <FaUser className='icon' /> */}
            </div>
            <div className="input-box">
                <input type="password" placeholder='password' required />
                {/* <FaLock className='icon' /> */}
            </div>

            <div className="remember-forgot">
                <label><input type="checkbox" />Remember me</label>
                <a href="#">Forget password</a>
            </div>

            <button type="submit">Login</button>

            <div className="register-link">
                <p>Don't have an account? <a href="#">Register</a></p>
            </div>
        </form>

    </div>
  );
};

export default AdminLogin;