import React, { Suspense, useState, useEffect } from 'react';
import { useParentState } from '../useIframeState';

// Create a simple error boundary component
const ErrorBoundary = ({ children }: { children: React.ReactNode }) => {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const handleError = (error: ErrorEvent) => {
      console.error('Error caught by boundary:', error);
      setHasError(true);
    };
    window.addEventListener('error', handleError);
    return () => window.removeEventListener('error', handleError);
  }, []);

  if (hasError) {
    return <div>Something went wrong loading the component. Please try again.</div>;
  }

  return <>{children}</>;
};

export default function ComponentPreview() {
  const [Component, setComponent] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  const [state, setState] = useParentState({
    params: {
      type: "string",
      value: JSON.stringify({ id: "123" }),
      label: "Params",
    },
    searchParams: {
      type: "string",
      value: JSON.stringify({ query: "test" }),
      label: "Search Params",
    },
  });

  useEffect(() => {
    const loadComponent = async () => {
      try {
        // Using dynamic import with error handling
        const module = await import('../../app/(use-page-wrapper)/auth/logout/page');
        setComponent(() => module.default);
      } catch (err) {
        console.error('Failed to load component:', err);
        setError('Failed to load the component');
      }
    };

    loadComponent();
  }, []);

  const params = JSON.parse(state.params.value);
  const searchParams = JSON.parse(state.searchParams.value);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!Component) {
    return <div>Loading component...</div>;
  }

  return (
    <ErrorBoundary>
      <Suspense fallback={<div>Loading...</div>}>
        <Component params={params} searchParams={searchParams} />
      </Suspense>
    </ErrorBoundary>
  );
}