import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

const root = createRoot(document.getElementById('root'));

root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);

// Remove preloader as soon as React finishes first render
// requestAnimationFrame fires after first paint is committed to screen
requestAnimationFrame(() => {
  requestAnimationFrame(() => {
    const preloader = document.getElementById('app-preloader');
    if (preloader) {
      preloader.classList.add('fade-out');
      setTimeout(() => preloader.remove(), 420);
    }
  });
});
