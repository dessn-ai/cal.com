import React from 'react';
import { useParentState } from '../useIframeState';
import { SetupAvailability } from '../../components/getting-started/steps-views/SetupAvailability';

import { useForm } from 'react-hook-form';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    defaultScheduleId: {
      type: "number",
      value: 1,
      label: "Default Schedule ID",
    },
  });

  const form = useForm();

  return (
    <SetupAvailability
      nextStep={() => console.log('Next step called')}
      defaultScheduleId={state.defaultScheduleId.value}
    />
  );
}