import React, { Suspense } from 'react';
import { useParentState } from '../useIframeState';

// Using dynamic import with error boundary
const ImportedComponent = React.lazy(() => import('../../app/(use-page-wrapper)/500/page')
  .catch(() => ({ 
    default: () => <div>Error: Failed to load 500 error page component</div> 
  }))
);

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    error: {
      type: "string",
      value: "Example error message",
      label: "Error Message",
    },
  });

  const searchParams = {
    error: state.error.value,
  };

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ImportedComponent searchParams={searchParams} />
    </Suspense>
  );
}