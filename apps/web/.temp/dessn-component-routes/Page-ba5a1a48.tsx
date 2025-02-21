import React, { Suspense } from 'react';
import { useParentState } from '../useIframeState';
import dynamic from 'next/dynamic';

// Dynamically import the component with error handling
const ImportedComponent = dynamic(
  () => import('../../app/(use-page-wrapper)/settings/(settings-layout)/my-account/profile/page').catch(() => {
    return () => <div>Error loading component</div>;
  }),
  {
    ssr: false,
    loading: () => <div>Loading...</div>
  }
);

// Mock components that might be needed
const MockSettingsHeader = ({ children }: { children: React.ReactNode }) => (
  <div data-testid="mock-settings-header">{children}</div>
);

const MockProfileView = () => (
  <div data-testid="mock-profile-view">Profile View</div>
);

export default function ComponentPreview() {
  const [state] = useParentState({});

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="preview-container">
        <ImportedComponent />
      </div>
    </Suspense>
  );
}