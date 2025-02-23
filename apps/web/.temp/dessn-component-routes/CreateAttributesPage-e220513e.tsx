import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/features/ee/organizations/pages/settings/attributes/attributes-edit-view';

import { useForm, FormProvider } from 'react-hook-form';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    id: {
      type: "string",
      value: "123",
      label: "Attribute ID",
    },
  });

  const methods = useForm();

  return (
    <FormProvider {...methods}>
      <ImportedComponent />
    </FormProvider>
  );
}