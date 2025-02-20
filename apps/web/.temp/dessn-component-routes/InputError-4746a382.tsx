import React from 'react';
import { useParentState } from '../useIframeState';
import { InputError } from '../../../../packages/ui/components/form/inputs/InputError';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    message: {
      type: "string",
      value: "This is an error message",
      label: "Error Message",
    },
  });

  return (
    <InputError message={state.message.value} />
  );
}