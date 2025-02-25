import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/features/form/components/CheckboxField';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    label: {
      type: "string",
      value: "Checkbox Label",
      label: "Label",
    },
    description: {
      type: "string",
      value: "This is a description for the checkbox",
      label: "Description",
    },
    descriptionAsLabel: {
      type: "boolean",
      value: false,
      label: "Description as Label",
    },
    informationIconText: {
      type: "string",
      value: "Additional information",
      label: "Information Icon Text",
    },
    checked: {
      type: "boolean",
      value: false,
      label: "Checked",
    },
    disabled: {
      type: "boolean",
      value: false,
      label: "Disabled",
    },
  });

  return (
    <ImportedComponent
      label={state.label.value}
      description={state.description.value}
      descriptionAsLabel={state.descriptionAsLabel.value}
      informationIconText={state.informationIconText.value}
      checked={state.checked.value}
      disabled={state.disabled.value}
      onChange={() => {}}
    />
  );
}