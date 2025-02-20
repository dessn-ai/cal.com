import React from 'react';
import { useParentState } from '../useIframeState';
import { LayoutWrapper } from '../../modules/settings/organizations/[id]/onboard-members-view';


export default function ComponentPreview() {
  const [state, setState] = useParentState({});

  return (
    <LayoutWrapper>
      {/* You can add any child components here if needed */}
      <div>Child content goes here</div>
    </LayoutWrapper>
  );
}