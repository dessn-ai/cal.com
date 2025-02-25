import React, { Suspense } from 'react';
import { useParentState } from '../useIframeState';

// Mock component to prevent actual import
const MockAdminAPIView = () => {
  return <div>Admin API View</div>;
};

// Mock component for SettingsHeader
const MockSettingsHeader = ({ children }: { children: React.ReactNode }) => {
  return <div>Settings Header {children}</div>;
};

// Create a mock version of the page component
const MockPageComponent = () => {
  return (
    <div>
      <MockSettingsHeader>
        <MockAdminAPIView />
      </MockSettingsHeader>
    </div>
  );
};

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    // No props identified for this component
  });

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <MockPageComponent />
    </Suspense>
  );
}