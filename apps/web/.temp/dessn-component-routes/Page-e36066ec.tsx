import React, { Suspense } from 'react';
import { useParentState } from '../useIframeState';

// Create a simple placeholder component
const PlaceholderComponent = () => (
  <div className="p-4">
    <h1>My Account Settings</h1>
    <div>Loading...</div>
  </div>
);

export default function ComponentPreview() {
  const [state] = useParentState({});

  return (
    <Suspense fallback={<PlaceholderComponent />}>
      <div className="w-full">
        <div className="mx-auto max-w-4xl">
          {/* Render a basic structure instead of importing the complex component */}
          <div className="mb-8">
            <h1 className="font-cal mb-1 text-xl font-bold leading-5 tracking-wide text-black">
              Profile
            </h1>
            <p className="text-sm text-gray-600">
              Manage your profile settings
            </p>
          </div>
          <div className="flex flex-col space-y-4">
            <div className="rounded-md border p-4">
              <h2 className="font-medium">General Settings</h2>
              <p>Your account preferences and settings</p>
            </div>
          </div>
        </div>
      </div>
    </Suspense>
  );
}