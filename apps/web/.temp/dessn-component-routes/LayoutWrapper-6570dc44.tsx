import React from 'react';
import { useParentState } from '../useIframeState';
import { LayoutWrapper } from '../../modules/settings/teams/[id]/event-types-view';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    children: {
      type: "string",
      value: "<div>Sample child content</div>",
      label: "Children",
    },
  });

  return (
    <LayoutWrapper>
      {React.createElement('div', { dangerouslySetInnerHTML: { __html: state.children.value } })}
    </LayoutWrapper>
  );
}