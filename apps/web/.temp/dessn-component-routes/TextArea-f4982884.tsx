import React from 'react';
import { useParentState } from '../useIframeState';
import { TextArea } from '../../../../packages/ui/components/form/inputs/Input';

import { useForm, FormProvider } from 'react-hook-form';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    value: {
      type: "string",
      value: "Sample text area content",
      label: "Text Area Value"
    },
    className: {
      type: "string",
      value: "",
      label: "CSS Class"
    },
    placeholder: {
      type: "string",
      value: "Enter your text here...",
      label: "Placeholder"
    },
    rows: {
      type: "number",
      value: 4,
      label: "Number of Rows"
    },
    disabled: {
      type: "boolean",
      value: false,
      label: "Disabled"
    }
  });

  const methods = useForm();

  return (
    <FormProvider {...methods}>
      <TextArea
        value={state.value.value}
        onChange={(e) => setState('value', e.target.value)}
        className={state.className.value}
        placeholder={state.placeholder.value}
        rows={state.rows.value}
        disabled={state.disabled.value}
      />
    </FormProvider>
  );
}