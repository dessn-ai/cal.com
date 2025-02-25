import React, { Suspense } from 'react';
import { useParentState } from '../useIframeState';
import { ErrorBoundary } from '../ErrorBoundary';

// Dynamically import the component with error handling
const ImportedComponent = React.lazy(() => import('../../app/(use-page-wrapper)/auth/forgot-password/[id]/page')
  .catch(err => {
    console.error('Error loading component:', err);
    return {
      default: () => (
        <div className="error-message">
          Failed to load component. Please check the console for more details.
        </div>
      )
    };
  })
);

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    params: {
      type: "string",
      value: JSON.stringify({ id: "123" }),
      label: "Params",
    },
    searchParams: {
      type: "string",
      value: JSON.stringify({ token: "abc123" }),
      label: "Search Params",
    },
  });

  let params;
  let searchParams;

  try {
    params = JSON.parse(state.params.value);
    searchParams = JSON.parse(state.searchParams.value);
  } catch (error) {
    console.error('Error parsing params:', error);
    params = { id: "123" };
    searchParams = { token: "abc123" };
  }

  return (
    <ErrorBoundary>
      <Suspense fallback={<div>Loading...</div>}>
        <ImportedComponent params={params} searchParams={searchParams} />
      </Suspense>
    </ErrorBoundary>
  );
}