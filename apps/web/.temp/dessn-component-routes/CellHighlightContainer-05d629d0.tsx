import React from 'react';
import { useParentState } from '../useIframeState';
import { CellHighlightContainer } from '../../../../packages/features/timezone-buddy/components/CellHighlightContainer';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    children: {
      type: "string",
      value: "<div>Sample content</div>",
      label: "Children",
    },
  });

  return (
    <CellHighlightContainer>
      {React.createElement('div', { dangerouslySetInnerHTML: { __html: state.children.value } })}
    </CellHighlightContainer>
  );
}