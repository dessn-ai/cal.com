import React, { Suspense } from 'react';
import { useParentState } from '../useIframeState';
import { ErrorBoundary } from '../ErrorBoundary';

// Mock the page component instead of importing directly
const MockedComponent = () => {
  return (
    <div className="getting-started-page">
      <h1>Getting Started Page</h1>
      <p>This is a preview of the getting started page.</p>
      <p>Note: Some server-side features are not available in preview mode.</p>
    </div>
  );
};

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    params: {
      type: "string",
      value: JSON.stringify({ step: ['1'] }),
      label: "Params",
    },
    searchParams: {
      type: "string",
      value: JSON.stringify({ query: 'test' }),
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
    params = { step: ['1'] };
    searchParams = { query: 'test' };
  }

  return (
    <ErrorBoundary>
      <Suspense fallback={<div>Loading...</div>}>
        <div className="preview-container">
          <MockedComponent />
        </div>
      </Suspense>
    </ErrorBoundary>
  );
}