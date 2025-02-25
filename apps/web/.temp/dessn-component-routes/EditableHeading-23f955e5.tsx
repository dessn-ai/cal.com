import React from 'react';
import { useParentState } from '../useIframeState';
import { EditableHeading } from '../../../../packages/ui/components/editable-heading/EditableHeading';

import { useForm, Controller } from 'react-hook-form';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    value: {
      type: "string",
      value: "Editable Heading",
      label: "Heading Value",
    },
    isReady: {
      type: "boolean",
      value: true,
      label: "Is Ready",
    },
    disabled: {
      type: "boolean",
      value: false,
      label: "Disabled",
    },
    placeholder: {
      type: "string",
      value: "Enter heading",
      label: "Placeholder",
    },
  });

  const { control } = useForm();

  return (
    <Controller
      name="editableHeading"
      control={control}
      defaultValue={state.value.value}
      render={({ field }) => (
        <EditableHeading
          {...field}
          value={state.value.value}
          onChange={(value) => {
            field.onChange(value);
            setState('value', value);
          }}
          isReady={state.isReady.value}
          disabled={state.disabled.value}
          placeholder={state.placeholder.value}
        />
      )}
    />
  );
}