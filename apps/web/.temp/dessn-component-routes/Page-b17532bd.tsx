import React from 'react';
import { useParentState } from '../useIframeState';

// Create a mock profile page component
const MockProfilePage = () => {
  return (
    <div className="flex flex-col space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Organization Profile</h2>
      </div>
      <div className="flex flex-col space-y-4">
        <div className="rounded-md border p-4">
          <h3 className="text-lg font-medium">Organization Details</h3>
          <div className="mt-4 space-y-2">
            <div>
              <label className="block text-sm font-medium">Organization Name</label>
              <input
                type="text"
                className="mt-1 block w-full rounded-md border p-2"
                placeholder="Enter organization name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Organization Slug</label>
              <input
                type="text"
                className="mt-1 block w-full rounded-md border p-2"
                placeholder="Enter organization slug"
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
      <MockProfilePage />
    </div>
  );
}