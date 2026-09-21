import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

// Order is load-bearing: the design system defines the tokens, the theme
// retunes them to the brand, and the page styles consume the result.
import './styles/design-system.css';
import './styles/theme.css';
import './styles/app.css';

import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
