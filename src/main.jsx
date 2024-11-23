import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/globals.css';  // このパスが正しいことを確認
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);