import React from 'react';
import ReactDOM from 'react-dom/client';
import Router from './Router'; // Ensure the path to your Router component is correct

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
);
