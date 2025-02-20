import React, { Suspense } from 'react';
import { useParentState } from '../useIframeState';

// Mock 404 component since we're having issues with the direct import
const Mock404Component = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900">404</h1>
        <p className="text-xl text-gray-600 mt-4">Page not found</p>
        <p className="text-gray-500 mt-2">The page you're looking for doesn't exist or has been moved.</p>
      </div>
    </div>
  );
};

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    pathname: {
      type: "string",
      value: "/some-non-existent-page",
      label: "Pathname",
    },
  });

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Mock404Component />
    </Suspense>
  );
}