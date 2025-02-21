import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../lib/app-providers';


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
      {state.children.value}
    </ImportedComponent>
  );
}