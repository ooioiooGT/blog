import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyBB9qsR6TivEP1jt5Foj7hOMpUfdqtcOFo",
  authDomain: "gilberny-blog.firebaseapp.com",
  projectId: "gilberny-blog",
  storageBucket: "gilberny-blog.firebasestorage.app",
  messagingSenderId: "597103795171",
  appId: "1:597103795171:web:e34b7448a5e20e28f79ed6",
  measurementId: "G-CZ33GBQH53"
};

initializeApp(firebaseConfig);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
