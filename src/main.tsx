
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Remove any potential watermark elements on load
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
});

createRoot(document.getElementById("root")!).render(<App />);
