import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../components/auth/TwoFactor';

import { FormProvider, useForm } from 'react-hook-form';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    center: {
      type: "boolean",
      value: true,
      label: "Center",
    },
    autoFocus: {
      type: "boolean",
      value: true,
      label: "Auto Focus",
    },
  });

  const methods = useForm();

  return (
    <FormProvider {...methods}>
      <ImportedComponent 
        center={state.center.value} 
        autoFocus={state.autoFocus.value} 
      />
    </FormProvider>
  );
}