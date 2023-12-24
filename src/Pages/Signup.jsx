
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import MyGoogleLogin from './Google';
import './CSS/SignUp.css';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const navigate = useNavigate();
  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string().min(8).required('Password is required'),
  });

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const apiUrl = 'https://152.67.40.201:4406/register';

      const response = await fetch(apiUrl, {
        method: 'POST',
        mode: 'cors', // Adicione esta linha
        headers: {
          'accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      // Assuming the backend returns some data, you can handle it here
      const result = await response.json();
      console.log('User creation successful:', result);

      // Redirect to the success page
      navigate('/loginsuccess', { state: { name: values.name } });

    } catch (error) {
      console.error('Error creating user:', error.message);
      // Handle error, e.g., show an error message to the user
    } finally {
      setSubmitting(false);
    }
  };
      
  return (
    <Formik
      initialValues={{ name: '', email: '', password: '' }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}  // Add this onSubmit handler
    >
      <Form>
        <div className="signup">
          <div className="signup-container">
            <h1>Sign Up</h1>
            <div className="signup-fields">
              <Field type="text" name="name" placeholder="Your Name" />
              <ErrorMessage name="name" component="div" className="error-message" style={{ color: 'red', display: 'flex', justifyContent: 'center' }} />
              <Field
                type="text"
                id="email"
                name="email"
                placeholder="Email Address"
              />
              <ErrorMessage name="email" component="div" className="error-message" style={{ color: 'red', display: 'flex', justifyContent: 'center' }} />
              <Field
                type="password"
                id="password"
                name="password"
                placeholder="Password"
              />
              <ErrorMessage name="password" component="div" className="error-message" style={{ color: 'red', display: 'flex', justifyContent: 'center' }} />
            </div>
            <button type="submit">Sign Up</button>
            <p className="signup-login">
              Already have an account?
              <Link to="../../login" style={{ textDecoration: 'none' }}>
                <span>Login here</span>
              </Link>
            </p>
            <div id="googleAuth" className="gauth">
              <MyGoogleLogin />
            </div>
          </div>
        </div>
      </Form>
    </Formik>
  );
};

export default SignUp;
