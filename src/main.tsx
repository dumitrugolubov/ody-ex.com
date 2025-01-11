import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Detect if the user is coming from an AMP page
const isFromAmp = window.location.search.includes('amp=1');

// If on mobile and not explicitly coming from AMP, redirect to AMP version
if (
  !isFromAmp && 
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) &&
  window.location.pathname === '/'
) {
  window.location.href = '/amp/';
} else {
  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <App />
    </StrictMode>
  );
}