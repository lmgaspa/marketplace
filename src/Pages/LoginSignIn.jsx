import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './CSS/LoginSignIn.css';
import { Link } from 'react-router-dom';
import MyGoogleLogin from './Google';

const LoginSignup = () => {
  const initialValues = {
    name: '',
    email: '',
    password: '',
  };

  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string().min(8, 'Password must be at least 8 characters').required('Password is required'),
  });

  const onSubmit = async (values) => {
    try {
      const response = await fetch('http://152.67.40.201:4406/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        console.log('User signed up successfully!');
      } else {
        console.error('Failed to sign up.');
      }
    } catch (error) {
      console.error('Error during sign up:', error);
    }
  };

  return (
    <div>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
        {() => (
          <Form>
            <div className='loginsignin'>
              <div className="loginsignin-container">
                <h1>Sign In</h1>
                <div className="loginsignin-fields">
                  <Field type="text" name="name" placeholder='Your Name' />
                  <ErrorMessage name="name" component="div" className="error-message" style={{ color: 'red', display: 'flex', justifyContent: 'center' }} />
                  <Field type="email" name="email" placeholder='Email Address' />
                  <ErrorMessage name="email" component="div" className="error-message" style={{ color: 'red', display: 'flex', justifyContent: 'center' }} />
                  <Field type="password" name="password" placeholder='Password' />
                  <ErrorMessage name="password" component="div" className="error-message" style={{ color: 'red', display: 'flex', justifyContent: 'center' }} />
                </div>
                <div className='containerbutton'>
                  <button className='button1' type="submit">Continue</button>
                  <p className="loginsignin-login">
                    Don't have an account?
                    <Link to='../../signup' style={{ textDecoration: 'none' }}><span>Register here</span></Link>
                  </p>
                </div>
                <div id="googleAuth" className='gauth'>
                  <MyGoogleLogin />
                </div>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LoginSignup;
