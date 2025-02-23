import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/core/components/NoSSR';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    children: {
      type: "string",
      value: "This content is client-side only",
      label: "Children Content",
    },
    fallback: {
      type: "string",
      value: "Loading...",
      label: "Fallback Content",
    },
  });

  return (
    <ImportedComponent
      fallback={<div>{state.fallback.value}</div>}
    >
      {state.children.value}
    </ImportedComponent>
  );
}