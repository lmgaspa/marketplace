import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyD7dIJyWSzp6sjHVLMUMn5FgvMqmibBrOE",
  authDomain: "react-auth-8aefd.firebaseapp.com",
  projectId: "react-auth-8aefd",
  storageBucket: "react-auth-8aefd.appspot.com",
  messagingSenderId: "1090962159",
  appId: "1:1090962159:web:684bf0d7fb2da35d67d11a",
  measurementId: "G-RXGK82KPTY"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export { auth };