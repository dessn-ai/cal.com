import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/features/ee/event-tracking/lib/posthog/provider';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    children: {
      type: "string",
      value: "<div>Sample Child Content</div>",
      label: "Children",
    },
  });

  return (
    <ImportedComponent>
      {React.createElement('div', { dangerouslySetInnerHTML: { __html: state.children.value } })}
    </ImportedComponent>
  );
}