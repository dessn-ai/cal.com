import React, { Suspense } from 'react';
import { useParentState } from '../useIframeState';

// Using dynamic import with error boundary
const ImportedComponent = React.lazy(() => import('../../app/(use-page-wrapper)/booking/[uid]/embed/page')
  .catch(() => ({ 
    default: () => <div>Error: Failed to load component</div> 
  }))
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
      value: JSON.stringify({ date: "2023-06-01" }),
      label: "Search Params",
    },
  });

  const params = JSON.parse(state.params.value);
  const searchParams = JSON.parse(state.searchParams.value);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ImportedComponent params={params} searchParams={searchParams} />
    </Suspense>
  );
}