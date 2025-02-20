import React from 'react';
import { useParentState } from '../useIframeState';
import { CellHighlightContainer } from '../../../../packages/features/timezone-buddy/components/CellHighlightContainer';
import { TBContext } from '../../../../packages/features/timezone-buddy/store';
import { createStore } from 'zustand';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    children: {
      type: "string",
      value: "<div>Sample content</div>",
      label: "Children",
    },
  });

  // Create a mock store with the required properties
  const store = createStore((set) => ({
    x: 0,
    y: 0,
    height: 0,
    isHover: false,
    updateDimensions: () => set((state) => state),
    setContainerRef: () => {},
  }));

  return (
    <TBContext.Provider value={store}>
      <CellHighlightContainer>
        {React.createElement('div', { dangerouslySetInnerHTML: { __html: state.children.value } })}
      </CellHighlightContainer>
    </TBContext.Provider>
  );
}