import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ShopContextProvider from './Context/ShopContext';
import { GoogleOAuthProvider } from '@react-oauth/google';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="206143925112-s9ri4ged3ku0ajretiefq38toqh381rq.apps.googleusercontent.com">
      <ShopContextProvider>
        <App />
      </ShopContextProvider>
    </GoogleOAuthProvider>
  </React.StrictMode>
);
