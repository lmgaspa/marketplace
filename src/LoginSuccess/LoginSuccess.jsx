import React from 'react';
import { useLocation } from 'react-router-dom';
import './LoginSuccess.css';  // Import your CSS file

const LoginSuccess = () => {
    const location = useLocation();
    const { name, picture } = location.state || {};

    return (
        <div className="login-success-container">
            <h1>Login Successful</h1>
            {name && <p style={{marginTop: '20px'}} className="welcome-message">Welcome, <span style={{color: 'red'}}>{name}!</span> </p>}
            {picture && <img src={picture} alt="Profile" className="profile-picture" />}
            {/* Other content of your LoginSuccess component */}
        </div>
    );
};

export default LoginSuccess;
