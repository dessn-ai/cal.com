import React from 'react';
import { useParentState } from '../useIframeState';
import { CallToActionTable } from '../../../../packages/emails/src/components/CallToActionTable';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    children: {
      type: "string",
      value: "Click me!",
      label: "Button Text",
    },
  });

  return (
    <CallToActionTable>
      {state.children.value}
    </CallToActionTable>
  );
}