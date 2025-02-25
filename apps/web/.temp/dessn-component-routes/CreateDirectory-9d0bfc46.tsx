import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/features/ee/dsync/components/CreateDirectory';

import { FormProvider, useForm } from 'react-hook-form';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    orgId: {
      type: "number",
      value: 1,
      label: "Organization ID",
    },
  });

  const form = useForm();

  return (
    <FormProvider {...form}>
      <ImportedComponent orgId={state.orgId.value} />
    </FormProvider>
  );
}