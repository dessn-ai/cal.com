import React from 'react';
import { useParentState } from '../useIframeState';
import { HoverCard, HoverCardTrigger, HoverCardContent } from '../../../../packages/ui/components/hover-card/index';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    align: {
      type: "dropdown",
      value: "center",
      options: ["start", "center", "end"],
      label: "Align"
    },
    sideOffset: {
      type: "number",
      value: 4,
      label: "Side Offset"
    },
    className: {
      type: "string",
      value: "",
      label: "Additional CSS Class"
    }
  });

  // Create a mock preview that shows both the trigger and content side by side
  return (
    <div style={{ display: 'flex', gap: '20px', padding: '20px' }}>
      <div style={{ border: '1px dashed #ccc', padding: '10px', borderRadius: '4px' }}>
        <div>Trigger Preview:</div>
        <button>Hover over me</button>
      </div>
      
      <div style={{ border: '1px dashed #ccc', padding: '10px', borderRadius: '4px' }}>
        <div>Content Preview:</div>
        <div
          style={{
            backgroundColor: 'white',
            border: '1px solid #e2e8f0',
            borderRadius: '6px',
            padding: '8px',
            width: '256px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
          }}
        >
          This is the content of the HoverCard
        </div>
      </div>
    </div>
  );
}