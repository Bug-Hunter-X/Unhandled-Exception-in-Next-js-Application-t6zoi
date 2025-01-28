```javascript
// pages/aboutSolution.js
import { ErrorBoundary } from 'react-error-boundary';

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre style={{ color: 'red' }}>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
}

function About() {
  throw new Error('Something went wrong!');
}

export default function AboutWithBoundary() {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <About />
    </ErrorBoundary>
  );
}
```