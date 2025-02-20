import React, { Suspense } from 'react';
import { useParentState } from '../useIframeState';

// Use dynamic import with error boundary
const ImportedComponent = React.lazy(() => import('../../app/(use-page-wrapper)/auth/forgot-password/[id]/page')
  .catch(() => ({
    default: () => <div>Error loading component</div>
  }))
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

  const params = JSON.parse(state.params.value);
  const searchParams = JSON.parse(state.searchParams.value);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div style={{ padding: '20px' }}>
        <ImportedComponent params={params} searchParams={searchParams} />
      </div>
    </Suspense>
  );
}