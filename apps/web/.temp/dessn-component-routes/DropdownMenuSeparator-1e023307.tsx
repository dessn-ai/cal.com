import React from 'react';
import { useParentState } from '../useIframeState';
import { DropdownMenuSeparator } from '../../../../packages/ui/components/dropdown/Dropdown';


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
      <DropdownMenuSeparator className={state.className.value} />
    </div>
  );
}