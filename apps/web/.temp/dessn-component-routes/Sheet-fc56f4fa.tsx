import React from 'react';
import { useParentState } from '../useIframeState';
import { Sheet } from '../../../../packages/ui/components/sheet/Sheet';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    open: {
      type: "boolean",
      value: false,
      label: "Open",
    },
    title: {
      type: "string",
      value: "Sheet Title",
      label: "Title",
    },
    description: {
      type: "string",
      value: "This is a sheet description",
      label: "Description",
    },
    showCloseButton: {
      type: "boolean",
      value: true,
      label: "Show Close Button",
    },
  });

  return (
    <Sheet open={state.open.value}>
      <Sheet.Content>
        <Sheet.Header showCloseButton={state.showCloseButton.value}>
          <Sheet.Title>{state.title.value}</Sheet.Title>
          <Sheet.Description>{state.description.value}</Sheet.Description>
        </Sheet.Header>
        <Sheet.Body>
          <p>Sheet content goes here</p>
        </Sheet.Body>
        <Sheet.Footer>
          <button onClick={() => setState('open', false)}>Close</button>
        </Sheet.Footer>
      </Sheet.Content>
    </Sheet>
  );
}