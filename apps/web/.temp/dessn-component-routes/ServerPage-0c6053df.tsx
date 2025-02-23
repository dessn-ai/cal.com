import React, { Suspense } from 'react';
import { useParentState } from '../useIframeState';
import { ErrorBoundary } from '../ErrorBoundary';

// Dynamically import the component with error handling
const ImportedComponent = React.lazy(() => import('../../app/(use-page-wrapper)/apps/installation/[[...step]]/page')
  .catch((err) => {
    console.error("Failed to load component:", err);
    return { default: () => <div>Error loading component</div> };
  })
);

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

  const params = JSON.parse(state.params.value);
  const searchParams = JSON.parse(state.searchParams.value);

  return (
    <ErrorBoundary>
      <Suspense fallback={<div>Loading...</div>}>
        <div className="preview-container">
          <ImportedComponent params={params} searchParams={searchParams} />
        </div>
      </Suspense>
    </ErrorBoundary>
  );
}