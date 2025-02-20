import React, { Suspense } from 'react';
import { useParentState } from '../useIframeState';

// Wrap the dynamic import in a try-catch
const ImportedComponent = React.lazy(() => {
  return import('../../app/(use-page-wrapper)/settings/platform/page')
    .then(module => ({ default: module.default || (() => null) }))
    .catch(() => ({ default: () => (
      <div className="p-4 text-red-500">
        Failed to load component. This may be due to server-side dependencies.
      </div>
    )}));
});

function LoadingFallback() {
  return <div className="p-4">Loading...</div>;
}

function ErrorFallback() {
  return (
    <div className="p-4 text-red-500">
      An error occurred while loading the component.
    </div>
  );
}

export default function ComponentPreview() {
  const [state] = useParentState({});
  const [error, setError] = React.useState(false);

  React.useEffect(() => {
    // Polyfill crypto if needed
    if (typeof window !== 'undefined' && !window.crypto) {
      try {
        (window as any).crypto = {
          getRandomValues: function(buffer: Uint8Array) {
            for (let i = 0; i < buffer.length; i++) {
              buffer[i] = Math.floor(Math.random() * 256);
            }
            return buffer;
          }
        };
      } catch (e) {
        console.error('Failed to polyfill crypto:', e);
      }
    }
  }, []);

  if (error) {
    return <ErrorFallback />;
  }

  return (
    <div className="preview-container">
      <Suspense fallback={<LoadingFallback />}>
        <ErrorBoundary onError={() => setError(true)}>
          <ImportedComponent />
        </ErrorBoundary>
      </Suspense>
    </div>
  );
}

// Error Boundary Component
class ErrorBoundary extends React.Component<{
  children: React.ReactNode;
  onError: (error: Error) => void;
}> {
  componentDidCatch(error: Error) {
    this.props.onError(error);
  }

  render() {
    return this.props.children;
  }
}