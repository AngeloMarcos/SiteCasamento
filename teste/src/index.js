// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

// Lê a URL base da API a partir do .env
export const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:4000';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
