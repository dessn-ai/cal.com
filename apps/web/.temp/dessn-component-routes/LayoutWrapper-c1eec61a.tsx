import React from 'react';
import { useParentState } from '../useIframeState';
import { LayoutWrapper } from '../../modules/settings/organizations/[id]/add-teams-view';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    children: {
      type: "string",
      value: "Sample content",
      label: "Children",
    },
  });

  return (
    <LayoutWrapper>
      {state.children.value}
    </LayoutWrapper>
  );
}