import React, { Suspense } from 'react';
import { useParentState } from '../useIframeState';
import dynamic from 'next/dynamic';

// Dynamically import the component with error handling
const ImportedComponent = dynamic(
  () => import('../../app/(use-page-wrapper)/403/page').catch(() => {
    // Return a fallback component if import fails
    return () => <div>Error loading component</div>;
  }),
  {
    ssr: false,
    loading: () => <div>Loading...</div>
  }
);

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    // Since the component doesn't have any props, we don't need to define any state
  });

  // Mock the getTranslate function
  const mockGetTranslate = () => (key: string) => key;

  // Mock the WEBAPP_URL constant
  const WEBAPP_URL = '/';

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="w-full">
        <ImportedComponent />
      </div>
    </Suspense>
  );
}