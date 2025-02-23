import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/app-store/zapier/components/AppSettingsInterface';


export default function ComponentPreview() {
  // Since the AppSettings component doesn't take any props, we don't need to use useParentState
  // However, we'll keep it here in case we want to add configurable options in the future

  const [state, setState] = useParentState({
    // No props to configure for now
  });

  return <ImportedComponent />;
}