import React from 'react';
import { useParentState } from '../useIframeState';
import { CalendarToggleContainer } from '../../../../packages/features/troubleshooter/components/CalendarToggleContainer';

// Create mock data
const mockConnectedCalendars = {
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
};

// Mock trpc directly
const mockTrpc = {
  viewer: {
    connectedCalendars: {
      useQuery: () => ({
        data: mockConnectedCalendars,
        isLoading: false,
      }),
    },
  },
};

// Override the actual trpc import
const trpc = mockTrpc;

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    isLoading: {
      type: "boolean",
      value: false,
      label: "Is Loading",
    },
  });

  // Create a mock query result that uses our state
  const queryResult = {
    ...mockTrpc.viewer.connectedCalendars.useQuery(),
    isLoading: state.isLoading.value,
  };

  // Override the mock query with our state-controlled version
  mockTrpc.viewer.connectedCalendars.useQuery = () => queryResult;

  return <CalendarToggleContainer />;
}