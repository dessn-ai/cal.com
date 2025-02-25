import React from 'react';
import { useParentState } from '../useIframeState';
import { FormBuilder } from '../../../../packages/features/form-builder/FormBuilder';
import { useForm, FormProvider } from "react-hook-form";

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    formProp: {
      type: "string",
      value: "fields",
      label: "Form Property",
    },
    title: {
      type: "string",
      value: "Booking Questions",
      label: "Title",
    },
    description: {
      type: "string",
      value: "These questions will be shown to your bookers before they can book with you.",
      label: "Description",
    },
    addFieldLabel: {
      type: "string",
      value: "Add a field",
      label: "Add Field Label",
    },
    disabled: {
      type: "boolean",
      value: false,
      label: "Disabled",
    },
    dataStore: {
      type: "dropdown",
      value: "{}",
      options: ["{}"],
      label: "Data Store",
    },
  });

  const dataStore = JSON.parse(state.dataStore.value);
  
  // Initialize the form with the correct structure
  const methods = useForm({
    defaultValues: {
      // Initialize with the property name that matches formProp.value
      [state.formProp.value]: [
        // Add a default field to prevent empty state
        {
          name: "default_field",
          type: "text",
          label: "Default Field",
          required: false,
        }
      ]
    }
  });

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(() => {})}>
        <FormBuilder
          formProp={state.formProp.value}
          title={state.title.value}
          description={state.description.value}
          addFieldLabel={state.addFieldLabel.value}
          disabled={state.disabled.value}
          LockedIcon={false}
          dataStore={dataStore}
        />
      </form>
    </FormProvider>
  );
}