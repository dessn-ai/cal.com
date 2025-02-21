import React from 'react';
import { useParentState } from '../useIframeState';
import { LayoutWrapper } from '../../modules/settings/organizations/[id]/about-view';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    children: {
      type: "string",
      value: "<p>Sample content for the organization form</p>",
      label: "Children Content",
    },
  });

  return (
    <LayoutWrapper>
      <div dangerouslySetInnerHTML={{ __html: state.children.value }} />
    </LayoutWrapper>
  );
}