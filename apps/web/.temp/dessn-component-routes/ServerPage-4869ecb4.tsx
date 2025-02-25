'use client';

import React, { Suspense } from 'react';
import { useParentState } from '../useIframeState';

// Using dynamic import with error boundary
const ImportedComponent = React.lazy(() => import('../../app/(use-page-wrapper)/booking/[uid]/page')
  .catch(() => ({
    default: () => (
      <div className="flex h-full items-center justify-center">
        <p className="text-red-500">Error: Failed to load booking page component</p>
      </div>
    ),
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
    return (
      <div className="flex h-full items-center justify-center">
        <p className="text-red-500">Error: Invalid JSON in parameters</p>
      </div>
    );
  }

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ImportedComponent params={params} searchParams={searchParams} />
    </Suspense>
  );
}