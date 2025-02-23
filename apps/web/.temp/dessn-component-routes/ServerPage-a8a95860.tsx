import React, { Suspense } from 'react';
import { useParentState } from '../useIframeState';

// Create a simple error boundary component
const ErrorFallback = ({ error }: { error: Error }) => (
  <div style={{ color: 'red', padding: '1rem' }}>
    <h2>Something went wrong:</h2>
    <pre>{error.message}</pre>
  </div>
);

const ImportedComponentWrapper = React.lazy(() => import('../../app/(use-page-wrapper)/settings/organizations/new/page')
  .catch((err) => ({
    default: () => <ErrorFallback error={err} />
  }))
);

interface PreviewState {
  params: {
    type: string;
    value: string;
    label: string;
  };
  searchParams: {
    type: string;
    value: string;
    label: string;
  };
}

export default function ComponentPreview() {
  const [state, setState] = useParentState<PreviewState>({
    params: {
      type: "string",
      value: JSON.stringify({}),
      label: "Params",
    },
    searchParams: {
      type: "string",
      value: JSON.stringify({}),
      label: "Search Params",
    },
  });

  let params = {};
  let searchParams = {};

  try {
    params = JSON.parse(state.params.value);
    searchParams = JSON.parse(state.searchParams.value);
  } catch (error) {
    console.error('Error parsing JSON:', error);
  }

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ImportedComponentWrapper params={params} searchParams={searchParams} />
    </Suspense>
  );
}