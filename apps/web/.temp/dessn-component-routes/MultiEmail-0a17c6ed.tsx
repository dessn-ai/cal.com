import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/ui/form/MultiEmail';

import { useLocale } from "@calcom/lib/hooks/useLocale";

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    value: {
      type: "string",
      value: JSON.stringify(["example@email.com"]),
      label: "Email List",
    },
    readOnly: {
      type: "boolean",
      value: false,
      label: "Read Only",
    },
    label: {
      type: "string",
      value: "Email Addresses",
      label: "Label",
    },
    placeholder: {
      type: "string",
      value: "Enter email address",
      label: "Placeholder",
    },
  });

  const setValue = (newValue: string[]) => {
    setState("value", JSON.stringify(newValue));
  };

  return (
    <ImportedComponent
      value={JSON.parse(state.value.value)}
      readOnly={state.readOnly.value}
      label={state.label.value}
      setValue={setValue}
      placeholder={state.placeholder.value}
    />
  );
}