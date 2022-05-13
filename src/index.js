import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import Auth from './pages/Auth/authorization';
import Register from './pages/Registration/registration';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Register />
  </React.StrictMode>
);
