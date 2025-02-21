import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../modules/maintenance/maintenance-view';


export default function ComponentPreview() {
  // Since the component doesn't have any props, we don't need to use useParentState
  // However, we'll keep it here in case we want to add configurable options in the future

  const [state, setState] = useParentState({
    // No props to configure
  });

  return <ImportedComponent />;
}