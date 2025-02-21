import React from 'react';
import { useParentState } from '../useIframeState';
import { DialogTrigger } from '../../../../packages/ui/components/dialog/Dialog';

import { Button } from '../../../../packages/ui/components/button';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    buttonText: {
      type: "string",
      value: "Open Dialog",
      label: "Button Text",
    },
    buttonColor: {
      type: "dropdown",
      value: "primary",
      options: ["primary", "secondary", "minimal", "destructive"],
      label: "Button Color",
    },
  });

  return (
    <DialogTrigger>
      <Button color={state.buttonColor.value as any}>
        {state.buttonText.value}
      </Button>
    </DialogTrigger>
  );
}