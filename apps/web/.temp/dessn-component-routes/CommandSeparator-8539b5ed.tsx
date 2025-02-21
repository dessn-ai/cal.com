import React from 'react';
import { useParentState } from '../useIframeState';
import { CommandSeparator } from '../../../../packages/ui/components/command/index';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    className: {
      type: "string",
      value: "",
      label: "Class Name",
    },
  });

  return (
    <div style={{ padding: '20px', background: '#f0f0f0' }}>
      <CommandSeparator className={state.className.value} />
    </div>
  );
}