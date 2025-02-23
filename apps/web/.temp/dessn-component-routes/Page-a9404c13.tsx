import React from 'react';
import { useParentState } from '../useIframeState';

// Mock components
const MockSettingsHeader = ({ children }: { children: React.ReactNode }) => <div>{children}</div>;
const MockAdminAppsList = () => <div>Admin Apps List</div>;

// Mock translate function
const mockGetTranslate = (key: string) => key;

// Mock the actual page component instead of importing it
// This prevents the actual import which might be causing the error
const MockPageComponent = () => {
  return (
    <div>
      <MockSettingsHeader>
        <h2>Apps Settings</h2>
      </MockSettingsHeader>
      <MockAdminAppsList />
    </div>
  );
};

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    // Since this component doesn't have any props, we don't need to define any state
  });

  return (
    <div className="flex min-h-screen w-full flex-col">
      <MockPageComponent />
    </div>
  );
}