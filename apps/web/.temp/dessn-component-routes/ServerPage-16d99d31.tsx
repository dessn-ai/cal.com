import React, { Suspense } from 'react';
import { useParentState } from '../useIframeState';

// Dynamically import the component with error handling
const ImportedComponent = React.lazy(() => import('../../app/(use-page-wrapper)/auth/setup/page')
  .catch(err => {
    console.error('Failed to load component:', err);
    return { default: () => <div>Failed to load component</div> };
  })
);

// Simple error boundary component
const ErrorBoundary = ({ children }: { children: React.ReactNode }) => {
  const [hasError, setHasError] = React.useState(false);

  React.useEffect(() => {
    const handleError = (error: ErrorEvent) => {
      console.error('Error caught:', error);
      setHasError(true);
    };
    window.addEventListener('error', handleError);
    return () => window.removeEventListener('error', handleError);
  }, []);

  if (hasError) {
    return <div>Something went wrong loading the component.</div>;
  }

  return <>{children}</>;
};

export default function ComponentPreview() {
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

  const params = React.useMemo(() => {
    try {
      return JSON.parse(state.params.value);
    } catch (e) {
      console.error('Failed to parse params:', e);
      return {};
    }
  }, [state.params.value]);

  const searchParams = React.useMemo(() => {
    try {
      return JSON.parse(state.searchParams.value);
    } catch (e) {
      console.error('Failed to parse searchParams:', e);
      return {};
    }
  }, [state.searchParams.value]);

  return (
    <ErrorBoundary>
      <Suspense fallback={<div>Loading...</div>}>
        <ImportedComponent params={params} searchParams={searchParams} />
      </Suspense>
    </ErrorBoundary>
  );
}