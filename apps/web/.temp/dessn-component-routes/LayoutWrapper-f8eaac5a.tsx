import React from 'react';
import { useParentState } from '../useIframeState';
import { LayoutWrapper } from '../../modules/settings/teams/[id]/onboard-members-view';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    children: {
      type: "string",
      value: "<p>Sample content</p>",
      label: "Children",
    },
  });

  return (
    <LayoutWrapper>
      <div dangerouslySetInnerHTML={{ __html: state.children.value }} />
    </LayoutWrapper>
  );
}