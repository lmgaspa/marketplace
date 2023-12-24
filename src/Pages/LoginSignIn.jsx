import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import MyGoogleLogin from './Google';
import './CSS/LoginSignIn.css'
import { useNavigate } from 'react-router-dom';

const LoginSignIn = () => {
  const navigate = useNavigate();

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string().min(8).required('Password is required'),
  });

  return (
    <div>
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={validationSchema}
        onSubmit={(values, actions) => {
          // Perform API request for login
          fetch('https://apilogin-mvf1.onrender.com/admin/authenticate', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(values),
          })
            .then((response) => {
              if (response.ok) {
                // If the login is successful, navigate to /loginsuccess
                navigate.push('/loginsuccess');
              } else {
                // Handle unsuccessful login, you might want to display an error message
                console.error('Login failed');
              }
            })
            .catch((error) => {
              console.error('Error during login:', error);
            })
            .finally(() => {
              actions.setSubmitting(false); // Set this to false when the submission is complete
            });
        }}
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
                  <Link to='../../signup' style={{ textDecoration: 'none' }}><span>Register here</span></Link>
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
