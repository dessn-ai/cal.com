import React, { Suspense } from 'react';
import { useParentState } from '../useIframeState';
import dynamic from 'next/dynamic';

// Dynamically import the component with error handling
const DynamicComponent = dynamic(
  () => import('../../app/(use-page-wrapper)/settings/(settings-layout)/developer/webhooks/page')
    .catch(err => {
      console.error('Failed to load component:', err);
      return () => <div>Error loading component</div>;
    }),
  {
    ssr: false,
    loading: () => <div>Loading...</div>
  }
);

// Mock providers to avoid dependency issues
const MockProvider = ({ children }: { children: React.ReactNode }) => <>{children}</>;

export default function ComponentPreview() {
  const [state, setState] = useParentState({});

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <MockProvider>
        <DynamicComponent />
      </MockProvider>
    </Suspense>
  );
}