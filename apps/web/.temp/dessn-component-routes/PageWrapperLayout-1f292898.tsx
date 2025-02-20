import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../app/(use-page-wrapper)/layout';


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