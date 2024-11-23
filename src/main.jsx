import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import emailjs from '@emailjs/browser';
import App from './App.jsx';
import './styles/globals.css';

// EmailJSの初期化
emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);