import React from 'react';
import { useParentState } from '../useIframeState';
import { Providers } from '../../app/providers';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    children: {
      type: "string",
      value: "<div>Sample Child Content</div>",
      label: "Children",
    },
  });

  return (
    <Providers>
      {React.createElement('div', {
        dangerouslySetInnerHTML: { __html: state.children.value },
      })}
    </Providers>
  );
}