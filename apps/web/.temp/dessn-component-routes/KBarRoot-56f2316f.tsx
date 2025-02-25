import React from 'react';
import { useParentState } from '../useIframeState';
import { KBarRoot } from '../../../../packages/features/kbar/Kbar';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    children: {
      type: "string",
      value: "<div>Sample Child Content</div>",
      label: "Children",
    },
  });

  return (
    <KBarRoot>
      {state.children.value}
    </KBarRoot>
  );
}