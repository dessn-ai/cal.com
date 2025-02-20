import React from 'react';
import { useParentState } from '../useIframeState';
import { CalendarToggleContainer } from '../../../../packages/features/troubleshooter/components/CalendarToggleContainer';

import { trpc } from '@calcom/trpc/react';

// Mock trpc.viewer.connectedCalendars.useQuery
const mockUseQuery = () => ({
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
});

// Mock trpc
jest.mock('@calcom/trpc/react', () => ({
  trpc: {
    viewer: {
      connectedCalendars: {
        useQuery: mockUseQuery,
      },
    },
  },
}));

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    isLoading: {
      type: "boolean",
      value: false,
      label: "Is Loading",
    },
  });

  // Override the mocked useQuery with our state-controlled version
  trpc.viewer.connectedCalendars.useQuery = () => ({
    ...mockUseQuery(),
    isLoading: state.isLoading.value,
  });

  return <CalendarToggleContainer />;
}