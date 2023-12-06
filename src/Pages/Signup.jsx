import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './CSS/Signup.css';
import { Link } from 'react-router-dom';
import MyGoogleLogin from './Google';

const Signup = () => {
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

  const onSubmit = async (values, { setSubmitting, setErrors }) => {
    try {
      const response = await fetch('https://152.67.40.201:4406/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        console.log('User registered successfully!');
      } else {
        const errorData = await response.json(); // Se o back-end enviar detalhes de erro em JSON
        console.error('Failed to register user:', errorData);
        setErrors(errorData); // Define os erros no formulário para exibir mensagens de erro ao usuário
      }
    } catch (error) {
      console.error('Error during registration:', error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
      <Form>
        <div className="signup">
          <div className="signup-container">
            <h1>Sign Up</h1>
            <div className="signup-fields">
              <Field type="text" name="name" placeholder="Your Name" />
              <ErrorMessage name="name" component="div" className="error-message" style={{ color: 'red', display: 'flex', justifyContent: 'center' }} />
              <Field type="email" name="email" placeholder="Email Address" />
              <ErrorMessage name="email" component="div" className="error-message" style={{ color: 'red', display: 'flex', justifyContent: 'center' }} />
              <Field type="password" name="password" placeholder="Password" />
              <ErrorMessage name="password" component="div" className="error-message" style={{ color: 'red', display: 'flex', justifyContent: 'center' }} />
            </div>
            <button type="submit">Sign Up</button>
            <p className="signup-login">
              Already have an account?
              <Link to="../../login" style={{ textDecoration: 'none' }}>
                <span>Login here</span>
              </Link>
            </p>
            <div id="googleAuth" className='gauth'>
                  <MyGoogleLogin />
                </div>
          </div>
        </div>
      </Form>
    </Formik>
  );
};

export default Signup;
