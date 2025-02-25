import React, { Suspense } from 'react';
import { useParentState } from '../useIframeState';

// Using dynamic import with error boundary
const ImportedComponent = React.lazy(() => import('../../app/error').catch(() => ({
  default: () => (
    <div className="flex items-center justify-center h-screen">
      <div className="text-center">
        <h1 className="text-xl font-semibold">Error Loading Component</h1>
        <p>Unable to load the error component</p>
      </div>
    </div>
  ),
})));

export default function ComponentPreview() {
  const [state] = useParentState({
    errorMessage: {
      type: "string",
      value: "An unexpected error occurred",
      label: "Error Message",
    },
    errorName: {
      type: "string",
      value: "Internal Server Error",
      label: "Error Name",
    },
    statusCode: {
      type: "number",
      value: 500,
      label: "Status Code",
    },
  });

  const error = new Error(state.errorMessage.value);
  error.name = state.errorName.value;
  (error as any).statusCode = state.statusCode.value;

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ImportedComponent error={error} />
    </Suspense>
  );
}