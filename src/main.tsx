
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Remove any potential watermark elements and clear any cached favicons on load
document.addEventListener('DOMContentLoaded', () => {
  // Find and remove any potential watermark elements
  const possibleWatermarks = document.querySelectorAll(
    '[data-lovable-watermark], [data-gpt-engineer-badge], [class*="lovable-badge"], [class*="gpt-engineer-badge"], [id*="lovable-badge"], [id*="gpt-engineer-badge"]'
  );
  
  possibleWatermarks.forEach(element => {
    if (element && element.parentNode) {
      element.parentNode.removeChild(element);
    }
  });

  // Force favicon refresh
  const links = document.querySelectorAll('link[rel*="icon"]');
  links.forEach(link => {
    const newLink = document.createElement('link');
    const rel = link.getAttribute('rel') || '';
    newLink.setAttribute('rel', rel);
    newLink.setAttribute('href', '/LogoClear.jpg?' + new Date().getTime());
    document.head.removeChild(link);
    document.head.appendChild(newLink);
  });
});

createRoot(document.getElementById("root")!).render(<App />);
