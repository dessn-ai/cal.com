import React from 'react';
import { useParentState } from '../useIframeState';
import { FormProvider, useForm } from 'react-hook-form';

// Create a mock version of the imported component
const MockImportedComponent = ({ exampleProp }: any) => {
  return (
    <div>
      <h2>Mock Layout Handler Component</h2>
      <pre>{JSON.stringify(exampleProp, null, 2)}</pre>
    </div>
  );
};

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    exampleProp: {
      type: "string",
      value: "Example Value",
      label: "Example Prop",
    },
  });

  const methods = useForm();

  return (
    <FormProvider {...methods}>
      <React.Suspense fallback={<div>Loading...</div>}>
        <MockImportedComponent {...state} />
      </React.Suspense>
    </FormProvider>
  );
}