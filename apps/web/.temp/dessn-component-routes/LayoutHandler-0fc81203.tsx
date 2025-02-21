import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/app-store/routing-forms/pages/layout-handler/[...appPages]';

import { FormProvider, useForm } from 'react-hook-form';

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
      <ImportedComponent {...state} />
    </FormProvider>
  );
}