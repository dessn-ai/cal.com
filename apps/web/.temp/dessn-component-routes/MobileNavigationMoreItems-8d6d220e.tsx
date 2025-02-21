import React from 'react';
import { useParentState } from '../useIframeState';
import { MobileNavigationMoreItems } from '../../../../packages/features/shell/navigation/Navigation';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    // Since there are no props for this component, we don't need to define any state
  });

  return <MobileNavigationMoreItems />;
}