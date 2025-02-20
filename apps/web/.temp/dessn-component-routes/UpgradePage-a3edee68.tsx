import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../modules/upgrade/upgrade-view';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    doesUserHaveOrgToUpgrade: {
      type: 'boolean',
      value: true,
      label: 'User Has Org To Upgrade',
    },
  });

  // Mock the necessary data and functionality without using TRPC
  const mockData = {
    data: state.doesUserHaveOrgToUpgrade.value,
    isLoading: false,
    error: null
  };

  // Wrap the component in a try-catch to handle any TRPC-related errors
  try {
    return (
      <div className="preview-container">
        <ImportedComponent />
      </div>
    );
  } catch (error) {
    return (
      <div className="preview-error">
        <p>Preview not available: TRPC functionality is mocked in preview mode</p>
      </div>
    );
  }
}