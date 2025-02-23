import React from 'react';
import { useParentState } from '../useIframeState';
import { Command, CommandSeparator } from '../../../../packages/ui/components/command';

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
      <Command>
        <CommandSeparator className={state.className.value} />
      </Command>
    </div>
  );
}