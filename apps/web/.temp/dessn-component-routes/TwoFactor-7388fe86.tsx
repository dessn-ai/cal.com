import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../components/auth/BackupCode';

import { FormProvider, useForm } from 'react-hook-form';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    center: {
      type: "boolean",
      value: true,
      label: "Center",
    },
  });

  const methods = useForm();

  return (
    <FormProvider {...methods}>
      <ImportedComponent center={state.center.value} />
    </FormProvider>
  );
}