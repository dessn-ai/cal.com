import React, { Suspense } from 'react';
import { useParentState } from '../useIframeState';

// Using dynamic import with error handling
const ImportedComponent = React.lazy(() => import('../../app/(use-page-wrapper)/payment/[uid]/page')
  .catch(() => {
    // Fallback to a simple component if import fails
    return {
      default: () => <div>Error loading component</div>
    };
  })
);

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    params: {
      type: "string",
      value: JSON.stringify({ uid: "example-uid" }),
      label: "Params",
    },
    searchParams: {
      type: "string",
      value: JSON.stringify({ query: "example-query" }),
      label: "Search Params",
    },
  });

  let params;
  let searchParams;

  try {
    params = JSON.parse(state.params.value);
    searchParams = JSON.parse(state.searchParams.value);
  } catch (e) {
    params = { uid: "example-uid" };
    searchParams = { query: "example-query" };
  }

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ImportedComponent 
        params={params} 
        searchParams={searchParams} 
      />
    </Suspense>
  );
}