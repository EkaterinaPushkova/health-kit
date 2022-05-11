import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Auth from './pages/Auth/authorization';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Auth />
  </React.StrictMode>
);
