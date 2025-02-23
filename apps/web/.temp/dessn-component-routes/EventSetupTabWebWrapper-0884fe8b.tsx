import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/platform/atoms/event-types/wrappers/EventSetupTabWebWrapper';

import { SessionProvider } from 'next-auth/react';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    eventType: {
      type: 'string',
      value: 'default',
      label: 'Event Type',
    },
    locationOptions: {
      type: 'string',
      value: '[]',
      label: 'Location Options',
    },
    team: {
      type: 'string',
      value: '{}',
      label: 'Team',
    },
    teamMembers: {
      type: 'string',
      value: '[]',
      label: 'Team Members',
    },
    destinationCalendar: {
      type: 'string',
      value: '{}',
      label: 'Destination Calendar',
    },
  });

  const mockSession = {
    data: {
      user: {
        org: {
          id: 1,
        },
      },
    },
    status: 'authenticated',
  };

  return (
    <SessionProvider session={mockSession as any}>
      <ImportedComponent
        eventType={JSON.parse(state.eventType.value)}
        locationOptions={JSON.parse(state.locationOptions.value)}
        team={JSON.parse(state.team.value)}
        teamMembers={JSON.parse(state.teamMembers.value)}
        destinationCalendar={JSON.parse(state.destinationCalendar.value)}
      />
    </SessionProvider>
  );
}