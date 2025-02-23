import React, { Suspense } from 'react';
import dynamic from 'next/dynamic';

// Dynamically import the component with no SSR to avoid hydration issues
const ImportedComponent = dynamic(
  () => import('../../app/(use-page-wrapper)/settings/platform/oauth-clients/create/page').catch(() => {
    // Return a fallback component if import fails
    return () => <div>Error loading component</div>;
  }),
  { 
    ssr: false,
    loading: () => <div>Loading...</div>
  }
);

// Mock Providers Component
const MockProviders = ({ children }) => {
  return (
    <div data-testid="mock-providers">
      {children}
    </div>
  );
};

export default function ComponentPreview() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <MockProviders>
        <ImportedComponent />
      </MockProviders>
    </Suspense>
  );
}