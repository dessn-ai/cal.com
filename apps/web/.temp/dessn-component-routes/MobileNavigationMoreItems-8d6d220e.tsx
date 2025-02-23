import React from 'react';
import { useParentState } from '../useIframeState';

// Create a simplified version of MobileNavigationMoreItems
const SimplifiedMobileNavigationMoreItems = () => {
  return (
    <div className="fixed bottom-0 left-0 z-30 flex w-full bg-white border-t border-gray-200 dark:bg-gray-900 dark:border-gray-700">
      <div className="flex justify-between w-full p-2">
        <button className="flex flex-col items-center justify-center w-full min-w-0 text-gray-600 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <span className="text-xs">More</span>
        </button>
      </div>
    </div>
  );
};

export default function ComponentPreview() {
  const [state, setState] = useParentState({});

  return (
    <div className="h-screen w-screen bg-gray-50 dark:bg-gray-900">
      <SimplifiedMobileNavigationMoreItems />
    </div>
  );
}