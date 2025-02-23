import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../components/ui/form/MinutesField';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    label: {
      type: "string",
      value: "Duration",
      label: "Label",
    },
    id: {
      type: "string",
      value: "duration-input",
      label: "Input ID",
    },
    placeholder: {
      type: "string",
      value: "Enter duration",
      label: "Placeholder",
    },
    defaultValue: {
      type: "number",
      value: 30,
      label: "Default Value",
    },
    className: {
      type: "string",
      value: "",
      label: "Additional CSS Class",
    },
  });

  return (
    <ImportedComponent
      label={state.label.value}
      id={state.id.value}
      placeholder={state.placeholder.value}
      defaultValue={state.defaultValue.value}
      className={state.className.value}
    />
  );
}