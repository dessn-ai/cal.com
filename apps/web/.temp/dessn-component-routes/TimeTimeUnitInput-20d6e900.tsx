import React from 'react';
import { useParentState } from '../useIframeState';
import { TimeTimeUnitInput } from '../../../../packages/features/ee/workflows/components/TimeTimeUnitInput';

import { FormProvider, useForm } from 'react-hook-form';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    disabled: {
      type: "boolean",
      value: false,
      label: "Disabled",
    },
    defaultTime: {
      type: "number",
      value: 24,
      label: "Default Time",
    },
  });

  const methods = useForm({
    defaultValues: {
      time: state.defaultTime.value,
      timeUnit: 'MINUTE',
    },
  });

  return (
    <FormProvider {...methods}>
      <TimeTimeUnitInput 
        disabled={state.disabled.value} 
        defaultTime={state.defaultTime.value} 
      />
    </FormProvider>
  );
}