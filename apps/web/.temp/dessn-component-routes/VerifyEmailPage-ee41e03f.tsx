import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../modules/auth/verify-email-view';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    // Since the component doesn't have any props, we don't need to define any state
  });

  return <ImportedComponent />;
}