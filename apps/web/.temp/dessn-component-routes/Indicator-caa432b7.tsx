import React from 'react';
import { useParentState } from '../useIframeState';
import { Indicator } from '../../../../packages/ui/form/radio-area/Radio';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    disabled: {
      type: "boolean",
      value: false,
      label: "Disabled",
    },
  });

  return (
    <div className="flex items-center justify-center h-screen">
      <Indicator disabled={state.disabled.value} />
    </div>
  );
}