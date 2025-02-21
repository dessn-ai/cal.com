import React from 'react';
import { useParentState } from '../useIframeState';
import { ScrollableArea } from '../../../../packages/ui/components/scrollable/ScrollableArea';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    className: {
      type: "string",
      value: "max-h-64 max-w-md",
      label: "Class Name",
    },
  });

  return (
    <ScrollableArea className={state.className.value}>
      <div className="p-4">
        <h1>Scrollable Content</h1>
        <p>This is some content that might overflow the container.</p>
        <p>Scroll down to see more.</p>
        {[...Array(20)].map((_, index) => (
          <p key={index}>Paragraph {index + 1}</p>
        ))}
      </div>
    </ScrollableArea>
  );
}