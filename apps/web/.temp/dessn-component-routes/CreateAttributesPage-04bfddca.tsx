import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/features/ee/organizations/pages/settings/attributes/attributes-create-view';

import { FormProvider, useForm } from 'react-hook-form';

export default function ComponentPreview() {
  const methods = useForm();

  const [state, setState] = useParentState({
    isPending: {
      type: "boolean",
      value: false,
      label: "Is Pending",
    },
  });

  return (
    <FormProvider {...methods}>
      <ImportedComponent />
    </FormProvider>
  );
}