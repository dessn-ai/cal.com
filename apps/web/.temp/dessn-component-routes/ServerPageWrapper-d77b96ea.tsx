import React from 'react';
import { useParentState } from '../useIframeState';

// Mock component instead of importing
const MockPlatformSettingsPage = () => {
  return (
    <div className="flex flex-col space-y-6">
      <div className="flex flex-col space-y-2">
        <h1 className="text-2xl font-bold">Platform Settings</h1>
        <p className="text-gray-600">
          Configure your platform settings and integrations
        </p>
      </div>
      <div className="flex flex-col space-y-4">
        <div className="rounded-lg border p-4">
          <h2 className="text-lg font-medium">General Settings</h2>
          <div className="mt-4 space-y-2">
            <div className="flex items-center justify-between">
              <span>Platform Name</span>
              <input 
                type="text" 
                className="rounded border p-2"
                placeholder="Your Platform"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function ComponentPreview() {
  const [state, setState] = useParentState({});

  return (
    <div className="p-6">
      <MockPlatformSettingsPage />
    </div>
  );
}