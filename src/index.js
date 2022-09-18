import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Header from './pages/header/header.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header title="Meu App"/>
    <App />
  </React.StrictMode>
);


