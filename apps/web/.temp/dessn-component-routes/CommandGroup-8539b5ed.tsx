import React from 'react';
import { useParentState } from '../useIframeState';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    className: {
      type: "string",
      value: "custom-class",
      label: "Class Name",
    },
    children: {
      type: "string",
      value: "Command Group Content",
      label: "Children",
    },
  });

  return (
    <div className="command-root">
      <div className="command-list">
        <div className={`command-group ${state.className.value}`}>
          <div className="command-item">
            {state.children.value}
          </div>
        </div>
      </div>
    </div>
  );
}