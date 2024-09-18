import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Router from './Router.jsx'; // Update the path if needed
import './index.css';

const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <Router />
  </StrictMode>
);
