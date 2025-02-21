import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/platform/atoms/event-types/wrappers/EventAvailabilityTabWebWrapper';

import { FormProvider, useForm } from 'react-hook-form';
import { TRPCProvider } from '@calcom/trpc/react';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    eventType: {
      type: 'string',
      value: JSON.stringify({
        id: 1,
        title: 'Sample Event',
        length: 60,
      }),
      label: 'Event Type',
    },
    isTeamEvent: {
      type: 'boolean',
      value: false,
      label: 'Is Team Event',
    },
    user: {
      type: 'string',
      value: JSON.stringify({
        id: 1,
        name: 'John Doe',
        email: 'john@example.com',
        defaultScheduleId: 1,
      }),
      label: 'User',
    },
    teamMembers: {
      type: 'string',
      value: JSON.stringify([
        { id: 1, name: 'Team Member 1' },
        { id: 2, name: 'Team Member 2' },
      ]),
      label: 'Team Members',
    },
  });

  const formMethods = useForm({
    defaultValues: {
      schedule: 1,
    },
  });

  return (
    <TRPCProvider>
      <FormProvider {...formMethods}>
        <ImportedComponent
          eventType={JSON.parse(state.eventType.value)}
          isTeamEvent={state.isTeamEvent.value}
          user={JSON.parse(state.user.value)}
          teamMembers={JSON.parse(state.teamMembers.value)}
        />
      </FormProvider>
    </TRPCProvider>
  );
}