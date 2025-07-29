import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css'; // This should now reflect your trip planning theme
import App from './App.jsx'; // Main Trip Planner App component

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
