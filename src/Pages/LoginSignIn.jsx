import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Link, useNavigate } from 'react-router-dom';
import MyGoogleLogin from './Google';
import './CSS/LoginSignIn.css';

const LoginSignIn = () => {
  const navigate = useNavigate();

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string().min(8).required('Password is required'),
  });

  const handleLogin = async (values, actions) => {
    try {
      const response = await fetch('https://apilogin-mvf1.onrender.com/auth/authenticate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(`Login failed: ${errorData.message}`);
      }

      const data = await response.json();

      // Handle the successful login response
      console.log('Login successful:', data);

      // Optionally, you can store the token in local storage or a state management solution
      // localStorage.setItem('token', data.token);

      // Navigate to the success page
      const userName = data.user.name;
      navigate('/loginsuccess',  { state: { name: userName } });
    } catch (error) {
      // Handle errors during login
      console.error('Error during login:', error);
    } finally {
      actions.setSubmitting(false); // Set this to false when the submission is complete
    }
  };

  return (
    <div>
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={validationSchema}
        onSubmit={handleLogin}
      >  
        <Form>
          <div className='loginsignin'>
            <div className="loginsignin-container">
              <h1>Sign In</h1>
              <div className="loginsignin-fields">
                <Field type="email" name="email" placeholder='Email Address' />
                <ErrorMessage name="email" component="div" className="error-message" style={{ color: 'red', display: 'flex', justifyContent: 'center' }} />
                <Field type="password" name="password" placeholder='Password' />
                <ErrorMessage name="password" component="div" className="error-message" style={{ color: 'red', display: 'flex', justifyContent: 'center' }} />
              </div>
              <div className='containerbutton'>
                <button className='button1' type="submit">Continue</button>
                <p className="loginsignin-login">
                  Don't have an account?
                  <Link to='/signup' style={{ textDecoration: 'none' }}><span>Register here</span></Link>
                </p>
              </div>
              <div id="googleAuth" className='gauth'>
                <MyGoogleLogin />
              </div>
            </div>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginSignIn;
