import React, { Suspense } from 'react';
import { useParentState } from '../useIframeState';

// Wrap the import in a try-catch to handle potential import failures
const ImportedComponent = React.lazy(() => import('../../app/(use-page-wrapper)/500/page')
  .catch(() => ({
    default: () => (
      <div className="text-red-500">
        Error: Failed to load Error500 component
      </div>
    ),
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
      <div className="w-full">
        <ImportedComponent searchParams={searchParams} />
      </div>
    </Suspense>
  );
}