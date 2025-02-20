import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/features/eventtypes/components/AssignAllTeamMembers';

import { FormProvider, useForm } from 'react-hook-form';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    assignAllTeamMembers: {
      type: "boolean",
      value: false,
      label: "Assign All Team Members",
    },
    customClassNames: {
      type: "string",
      value: '{}',
      label: "Custom Class Names",
    },
  });

  const methods = useForm({
    defaultValues: {
      assignAllTeamMembers: state.assignAllTeamMembers.value,
    },
  });

  const setAssignAllTeamMembers = (value: boolean) => {
    setState('assignAllTeamMembers', value);
  };

  const onActive = () => {
    console.log('Active');
  };

  const onInactive = () => {
    console.log('Inactive');
  };

  return (
    <FormProvider {...methods}>
      <ImportedComponent
        assignAllTeamMembers={state.assignAllTeamMembers.value}
        setAssignAllTeamMembers={setAssignAllTeamMembers}
        onActive={onActive}
        onInactive={onInactive}
        customClassNames={JSON.parse(state.customClassNames.value)}
      />
    </FormProvider>
  );
}