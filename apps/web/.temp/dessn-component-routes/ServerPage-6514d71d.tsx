import React, { Suspense } from 'react';
import { useParentState } from '../useIframeState';

// Using dynamic import with error boundary
const ImportedComponent = React.lazy(() => import('../../app/(use-page-wrapper)/video/meeting-not-started/[uid]/page').catch(() => ({
  default: () => <div>Error: Failed to load component</div>
})));

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    params: {
      type: "string",
      value: JSON.stringify({ uid: "example-uid" }),
      label: "Params",
    },
    searchParams: {
      type: "string",
      value: JSON.stringify({ query: "example" }),
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
    params = { uid: "example-uid" };
    searchParams = { query: "example" };
  }

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ImportedComponent params={params} searchParams={searchParams} />
    </Suspense>
  );
}