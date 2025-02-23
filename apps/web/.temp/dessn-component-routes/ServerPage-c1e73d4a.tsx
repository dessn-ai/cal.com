import React, { Suspense, lazy } from 'react';
import { useParentState } from '../useIframeState';

// Wrap the imported component in a lazy load with error handling
const LazyComponent = lazy(() => 
  import('../../app/(use-page-wrapper)/[user]/page')
    .then(module => ({ default: module.default }))
    .catch(error => {
      console.error('Failed to load component:', error);
      return { default: () => <div>Failed to load component</div> };
    })
);

// Simple error boundary component
function ErrorBoundary({ children }: { children: React.ReactNode }) {
  const [hasError, setHasError] = React.useState(false);

  React.useEffect(() => {
    const handleError = () => setHasError(true);
    window.addEventListener('error', handleError);
    return () => window.removeEventListener('error', handleError);
  }, []);

  if (hasError) {
    return <div>Something went wrong. Please try again.</div>;
  }

  return <>{children}</>;
}

// Simple loading component
function LoadingFallback() {
  return <div>Loading component...</div>;
}

export default function ComponentPreview() {
  const [state] = useParentState({
    params: {
      type: "string",
      value: JSON.stringify({ user: "johndoe" }),
      label: "Params",
    },
    searchParams: {
      type: "string",
      value: JSON.stringify({ date: "2023-06-01" }),
      label: "Search Params",
    },
  });

  let params;
  let searchParams;

  try {
    params = JSON.parse(state.params.value);
    searchParams = JSON.parse(state.searchParams.value);
  } catch (error) {
    console.error('Failed to parse params:', error);
    params = { user: "johndoe" };
    searchParams = { date: "2023-06-01" };
  }

  return (
    <ErrorBoundary>
      <Suspense fallback={<LoadingFallback />}>
        <div style={{ padding: '20px' }}>
          <LazyComponent params={params} searchParams={searchParams} />
        </div>
      </Suspense>
    </ErrorBoundary>
  );
}