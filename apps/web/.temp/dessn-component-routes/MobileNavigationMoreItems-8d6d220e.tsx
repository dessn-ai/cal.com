import React from 'react';
import { useParentState } from '../useIframeState';

// Mock simplified version of MobileNavigationMoreItems
const MockMobileNavigationMoreItems = () => {
  return (
    <div className="mobile-navigation-more-items">
      <div className="flex flex-col space-y-2">
        <div className="flex items-center px-3 py-2">
          <span>Settings</span>
        </div>
        <div className="flex items-center px-3 py-2">
          <span>Help</span>
        </div>
        <div className="flex items-center px-3 py-2">
          <span>Profile</span>
        </div>
      </div>
    </div>
  );
};

export default function ComponentPreview() {
  const [state, setState] = useParentState({});

  return <MockMobileNavigationMoreItems />;
}