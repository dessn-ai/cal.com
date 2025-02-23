import React from 'react';
import { useParentState } from '../useIframeState';
import { Navigation } from '../../../../packages/features/shell/navigation/Navigation';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    isPlatformNavigation: {
      type: "boolean",
      value: false,
      label: "Is Platform Navigation",
    },
  });

  return (
    <Navigation isPlatformNavigation={state.isPlatformNavigation.value} />
  );
}