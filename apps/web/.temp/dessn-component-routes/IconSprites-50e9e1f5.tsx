import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/ui/components/icon/IconSprites';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    // Since the component doesn't have any props, we don't need to define any state
  });

  return <ImportedComponent />;
}