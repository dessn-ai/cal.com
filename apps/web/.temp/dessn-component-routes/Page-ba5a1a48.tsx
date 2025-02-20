import React, { Suspense } from 'react';
import { useParentState } from '../useIframeState';
import dynamic from 'next/dynamic';

// Dynamically import the component with error handling
const ImportedComponent = dynamic(
  () => import('../../app/(use-page-wrapper)/settings/(settings-layout)/my-account/profile/page').catch(() => {
    // Return a fallback component if the import fails
    return () => (
      <div className="flex h-full items-center justify-center">
        <p>Error loading component. Please check the import path and dependencies.</p>
      </div>
    );
  }),
  {
    ssr: false,
    loading: () => (
      <div className="flex h-full items-center justify-center">
        <p>Loading...</p>
      </div>
    ),
  }
);

export default function ComponentPreview() {
  const [state] = useParentState({});

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ImportedComponent />
    </Suspense>
  );
}