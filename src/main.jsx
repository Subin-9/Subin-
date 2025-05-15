import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { ThemeProvider } from './common/ThemeContext';
import { ErrorBoundary } from 'react-error-boundary'; 

function Fallback({ error }) {
  return (
    <div>
      <h2>Something went wrong</h2>
      <p>{error.message}</p>
    </div>
  );
}
const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <StrictMode>
    <ErrorBoundary FallbackComponent={Fallback}>
    <ThemeProvider>
      <App />
    </ThemeProvider>
    </ErrorBoundary>
  </StrictMode>
);

