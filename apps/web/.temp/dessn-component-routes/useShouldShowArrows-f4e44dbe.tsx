import React from 'react';
import { useParentState } from '../useIframeState';
import { useShouldShowArrows } from '../../../../packages/ui/components/apps/AllApps';


export default function ComponentPreview() {
  const [state, setState] = useParentState({});

  const { ref, calculateScroll, leftVisible, rightVisible } = useShouldShowArrows();

  return (
    <div>
      <p>Left Arrow Visible: {leftVisible.toString()}</p>
      <p>Right Arrow Visible: {rightVisible.toString()}</p>
      <ul
        ref={ref}
        onScroll={(e) => calculateScroll(e)}
        style={{ overflowX: 'auto', whiteSpace: 'nowrap', padding: '20px', border: '1px solid #ccc' }}
      >
        {[...Array(20)].map((_, index) => (
          <li key={index} style={{ display: 'inline-block', margin: '0 10px' }}>
            Item {index + 1}
          </li>
        ))}
      </ul>
    </div>
  );
}