import React, { useRef } from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/app-store/routing-forms/components/FormInputFields';
import { FormProvider, useForm } from "react-hook-form";

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    numberOfFields: {
      type: "number",
      value: 5,
      label: "Number of Fields",
    },
  });

  // Create fields as a simple array
  const fieldsArray = Array(state.numberOfFields.value)
    .fill(null)
    .map((_, i) => ({
      id: `field_${i}`,
      type: "text",
      label: `Field ${i + 1}`,
      required: false,
      format: "text",
      placeholder: `Enter field ${i + 1}`,
      selectText: `Select ${i + 1}`,
      options: [],
    }));

  // Keep a reference to fields by ID for direct access
  const fieldsById = useRef(
    fieldsArray.reduce((acc, field) => {
      acc[field.id] = field;
      return acc;
    }, {})
  );

  const mockForm = {
    fields: fieldsArray,  // Provide fields as an array
    schema: fieldsArray.map(field => field.id),
    // Method to get field by ID if needed
    getField: (id) => fieldsById.current[id],
    // Method to get all fields as an object if needed
    getFieldsObject: () => fieldsById.current
  };

  const methods = useForm({
    defaultValues: {
      fields: fieldsArray,
      schema: mockForm.schema
    }
  });

  return (
    <FormProvider {...methods}>
      <div data-testid="routing-forms-form">
        <ImportedComponent 
          numberOfFields={state.numberOfFields.value}
          form={mockForm}
        />
      </div>
    </FormProvider>
  );
}