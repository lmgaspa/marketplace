import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './CSS/LoginSignIn.css';
import { Link } from 'react-router-dom';

const LoginSignup = () => {
  const initialValues = {
    name: '',
    email: '',
    password: '',
  };

  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string().min(8).required('Password is required'),
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
        console.log('User login successfully!');
      } else {
        console.error('Failed to login.');
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
      <Form>
        <div className='loginsignin'>
          <div className="loginsignin-container">
            <h1>Sign In</h1>
            <div className="loginsignin-fields">
              <Field type="text" name="name" placeholder='Your Name' />
              <ErrorMessage name="name" component="div" className="error-message" style={{color: 'red', display: 'flex', justifyContent: 'center'}} />
              <Field type="email" name="email" placeholder='Email Address' />
              <ErrorMessage name="email" component="div" className="error-message" style={{color: 'red', display: 'flex', justifyContent: 'center'}} />
              <Field type="password" name="password" placeholder='Password' />
              <ErrorMessage name="password" component="div" className="error-message" style={{color: 'red', display: 'flex', justifyContent: 'center'}}/>
            </div>
            <button type="submit">Continue</button>
            <p className="loginsignin-login">
              Don't have a account? 
                <Link to='../../signup' style={{textDecoration: 'none'}}><span>Register here</span></Link>
            </p>
          </div>
        </div>
      </Form>
    </Formik>
  );
};

export default LoginSignup;
