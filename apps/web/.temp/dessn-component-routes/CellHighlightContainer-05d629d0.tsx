import React from 'react';
import { useParentState } from '../useIframeState';
import { CellHighlightContainer } from '../../../../packages/features/timezone-buddy/components/CellHighlightContainer';
import { TBContext, createTimezoneBuddyStore } from '../../../../packages/features/timezone-buddy/store';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    children: {
      type: "string",
      value: "<div>Sample content</div>",
      label: "Children",
    },
  });

  // Initialize the store with default values
  const store = React.useMemo(() => createTimezoneBuddyStore({
    browsingDate: new Date(),
    timeMode: "24h",
    x: 0,
    y: 0,
    height: 0,
  }), []);

  return (
    <TBContext.Provider value={store}>
      <CellHighlightContainer>
        {React.createElement('div', { dangerouslySetInnerHTML: { __html: state.children.value } })}
      </CellHighlightContainer>
    </TBContext.Provider>
  );
}