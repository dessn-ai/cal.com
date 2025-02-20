import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/features/ee/support/lib/freshchat/FreshChatProvider';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    children: {
      type: "string",
      value: "<div>Child Component</div>",
      label: "Children",
    },
  });

  return (
    <ImportedComponent>
      {React.createElement('div', { dangerouslySetInnerHTML: { __html: state.children.value } })}
    </ImportedComponent>
  );
}