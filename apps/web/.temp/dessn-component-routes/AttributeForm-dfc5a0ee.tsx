import React from 'react';
import { useParentState } from '../useIframeState';
import { AttributeForm } from '../../../../packages/features/ee/organizations/pages/settings/attributes/AttributesForm';

import { useForm } from 'react-hook-form';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    initialValues: {
      type: "dropdown",
      value: JSON.stringify({
        attrName: "Sample Attribute",
        isLocked: false,
        isWeightsEnabled: false,
        type: "SINGLE_SELECT",
        options: [
          { value: "Option 1", id: "1" },
          { value: "Option 2", id: "2" }
        ]
      }),
      label: "Initial Values",
    },
  });

  const form = useForm();

  const onSubmit = (values: any) => {
    console.log("Form submitted with values:", values);
  };

  return (
    <AttributeForm
      initialValues={JSON.parse(state.initialValues.value)}
      onSubmit={onSubmit}
      header={<h2>Attribute Form</h2>}
    />
  );
}