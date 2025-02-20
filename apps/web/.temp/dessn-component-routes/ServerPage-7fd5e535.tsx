import React, { Suspense } from 'react';
import { useParentState } from '../useIframeState';

// Using dynamic import with error boundary
const ImportedComponent = React.lazy(() => import('../../app/(use-page-wrapper)/[user]/[type]/page').catch(() => ({
  default: () => <div>Error: Failed to load component</div>
})));

interface Params {
  user: string;
  type: string;
}

interface SearchParams {
  date?: string;
}

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    params: {
      type: "string",
      value: JSON.stringify({ user: "johndoe", type: "meeting" }),
      label: "Params",
    },
    searchParams: {
      type: "string",
      value: JSON.stringify({ date: "2023-06-01" }),
      label: "Search Params",
    },
  });

  let params: Params;
  let searchParams: SearchParams;

  try {
    params = JSON.parse(state.params.value);
    searchParams = JSON.parse(state.searchParams.value);
  } catch (error) {
    return <div>Error: Invalid JSON in parameters</div>;
  }

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ImportedComponent params={params} searchParams={searchParams} />
    </Suspense>
  );
}