import React, { Suspense } from 'react';
import { useParentState } from '../useIframeState';
import dynamic from 'next/dynamic';

// Dynamically import the 404 component with error handling
const ImportedComponent = dynamic(() => import('../../pages/404').catch(() => {
  return Promise.resolve(() => (
    <div className="flex items-center justify-center min-h-screen">
      <h1 className="text-xl font-bold">404 - Page Not Found</h1>
    </div>
  ));
}), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center min-h-screen">
      <p>Loading...</p>
    </div>
  ),
});

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    pathname: {
      type: "string",
      value: "/some-non-existent-page",
      label: "Pathname",
    },
  });

  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center min-h-screen">
          <p>Loading...</p>
        </div>
      }
    >
      <div className="min-h-screen">
        <ImportedComponent />
      </div>
    </Suspense>
  );
}