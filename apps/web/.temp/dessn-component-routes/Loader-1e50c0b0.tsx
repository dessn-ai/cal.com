import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/ui/components/skeleton/Loader';


export default function ComponentPreview() {
  // Since the Loader component doesn't accept any props, we don't need to use useParentState
  // However, we'll keep it here in case we want to add any configurable options in the future

  const [state, setState] = useParentState({
    // No props to configure
  });

  return <ImportedComponent />;
}