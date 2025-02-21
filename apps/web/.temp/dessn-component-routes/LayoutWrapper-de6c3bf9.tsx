import React from 'react';
import { useParentState } from '../useIframeState';
import { LayoutWrapper } from '../../modules/settings/organizations/new/create-new-view';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    children: {
      type: "string",
      value: "Sample content for the organization form",
      label: "Children Content",
    },
  });

  return (
    <LayoutWrapper>
      {state.children.value}
    </LayoutWrapper>
  );
}