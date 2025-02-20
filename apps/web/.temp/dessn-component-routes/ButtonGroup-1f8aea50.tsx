import React from 'react';
import { useParentState } from '../useIframeState';
import { ButtonGroup } from '../../../../packages/ui/components/buttonGroup/ButtonGroup';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    combined: {
      type: "boolean",
      value: false,
      label: "Combined",
    },
    containerClassName: {
      type: "string",
      value: "",
      label: "Container Class Name",
    },
  });

  return (
    <ButtonGroup
      combined={state.combined.value}
      containerProps={{ className: state.containerClassName.value }}
    >
      <button>Button 1</button>
      <button>Button 2</button>
      <button>Button 3</button>
    </ButtonGroup>
  );
}