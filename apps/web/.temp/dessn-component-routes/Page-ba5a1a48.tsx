import React from 'react';
import { useParentState } from '../useIframeState';

// Mock Profile Page Component
const MockProfilePage = () => {
  return (
    <div className="mb-6 w-full">
      <div className="flex items-center justify-between">
        <div data-testid="mock-settings-header">
          <h2 className="font-cal text-emphasis mb-2 text-xl font-medium leading-6">
            Profile
          </h2>
          <p className="text-subtle text-sm">
            Manage your profile settings
          </p>
        </div>
      </div>
      <div className="mt-6">
        <div data-testid="mock-profile-view" className="flex flex-col space-y-4">
          <div className="flex flex-col space-y-2">
            <label className="text-emphasis font-medium">Name</label>
            <input 
              type="text" 
              className="border rounded p-2"
              placeholder="Your name"
            />
          </div>
          <div className="flex flex-col space-y-2">
            <label className="text-emphasis font-medium">Email</label>
            <input 
              type="email" 
              className="border rounded p-2"
              placeholder="your@email.com"
            />
          </div>
          <div className="flex flex-col space-y-2">
            <label className="text-emphasis font-medium">Bio</label>
            <textarea 
              className="border rounded p-2"
              placeholder="Write something about yourself"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default function ComponentPreview() {
  const [state] = useParentState({});

  return <MockProfilePage />;
}