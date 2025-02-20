import React from 'react';
import { useParentState } from '../useIframeState';
import { CalendarToggleContainer } from '../../../../packages/features/troubleshooter/components/CalendarToggleContainer';

import { trpc } from '@calcom/trpc/react';

// Mock data for connected calendars
const mockConnectedCalendars = {
  data: {
    connectedCalendars: [
      {
        integration: { name: 'Google Calendar' },
        credentialId: '1',
        calendars: [
          { name: 'Personal', primary: true, isSelected: true },
          { name: 'Work', isSelected: false },
        ],
      },
      {
        integration: { name: 'Outlook' },
        credentialId: '2',
        calendars: [
          { name: 'Main', primary: true, isSelected: true },
        ],
      },
    ],
  },
  isLoading: false,
};

// Override trpc.viewer.connectedCalendars.useQuery
const originalUseQuery = trpc.viewer.connectedCalendars.useQuery;
trpc.viewer.connectedCalendars.useQuery = () => mockConnectedCalendars;

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    isLoading: {
      type: "boolean",
      value: false,
      label: "Is Loading",
    },
  });

  // Create a mock query result with state-controlled loading
  const mockQueryResult = {
    ...mockConnectedCalendars,
    isLoading: state.isLoading.value,
  };

  // Override the query for this component
  trpc.viewer.connectedCalendars.useQuery = () => mockQueryResult;

  return <CalendarToggleContainer />;
}