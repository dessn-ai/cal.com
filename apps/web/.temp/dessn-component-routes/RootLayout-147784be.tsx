import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../app/layout';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    children: {
      type: "string",
      value: "<div>Sample child content</div>",
      label: "Children",
    },
  });

  return (
    <ImportedComponent>
      {React.createElement('div', { dangerouslySetInnerHTML: { __html: state.children.value } })}
    </ImportedComponent>
  );
}