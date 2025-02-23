import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/features/settings/ThemeLabel';

import { useForm } from 'react-hook-form';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    variant: {
      type: "dropdown",
      value: "light",
      options: ["light", "dark", "system"],
      label: "Variant",
    },
    value: {
      type: "dropdown",
      value: "light",
      options: ["light", "dark", "system"],
      label: "Value",
    },
    label: {
      type: "string",
      value: "Light Theme",
      label: "Label",
    },
    defaultChecked: {
      type: "boolean",
      value: false,
      label: "Default Checked",
    },
    fieldName: {
      type: "string",
      value: "theme",
      label: "Field Name",
    },
  });

  const { register } = useForm();

  return (
    <ImportedComponent
      variant={state.variant.value as "light" | "dark" | "system"}
      value={state.value.value as "light" | "dark" | "system"}
      label={state.label.value}
      defaultChecked={state.defaultChecked.value}
      register={register}
      fieldName={state.fieldName.value}
    />
  );
}