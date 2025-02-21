import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/platform/atoms/event-types/wrappers/EventAdvancedWebWrapper';

import { trpc } from '@calcom/trpc/react';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    eventType: {
      type: 'object',
      value: {},
      label: 'Event Type',
    },
    team: {
      type: 'object',
      value: null,
      label: 'Team',
    },
    user: {
      type: 'object',
      value: {
        email: 'user@example.com',
        secondaryEmails: [],
        theme: null,
        defaultBookerLayouts: null,
      },
      label: 'User',
    },
    isUserLoading: {
      type: 'boolean',
      value: false,
      label: 'Is User Loading',
    },
  });

  const showToast = (message: string, variant: 'success' | 'warning' | 'error') => {
    console.log(`Toast: ${message} (${variant})`);
  };

  // Mock trpc.viewer.connectedCalendars.useQuery
  const mockUseQuery = () => ({
    data: [],
    isPending: false,
    error: null,
  });

  // Mock trpc object
  const mockTrpc = {
    viewer: {
      connectedCalendars: {
        useQuery: mockUseQuery,
      },
    },
  };

  return (
    <ImportedComponent
      eventType={state.eventType.value}
      team={state.team.value}
      user={state.user.value}
      isUserLoading={state.isUserLoading.value}
      showToast={showToast}
    />
  );
}