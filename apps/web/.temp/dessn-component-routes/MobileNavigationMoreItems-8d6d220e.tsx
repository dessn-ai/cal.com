import React from 'react';
import { useParentState } from '../useIframeState';

// Mock version of MobileNavigationMoreItems
const MockMobileNavigationMoreItems = () => {
  return (
    <div className="mobile-navigation-more-items">
      <div className="flex flex-col space-y-2">
        <div className="px-4 py-2 text-gray-700">Settings</div>
        <div className="px-4 py-2 text-gray-700">Profile</div>
        <div className="px-4 py-2 text-gray-700">Help</div>
        <div className="px-4 py-2 text-gray-700">Logout</div>
      </div>
    </div>
  );
};

export default function ComponentPreview() {
  const [state, setState] = useParentState({});

  return <MockMobileNavigationMoreItems />;
}