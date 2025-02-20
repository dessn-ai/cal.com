import React from 'react';
import { useParentState } from '../useIframeState';
import { EventTypeFilter } from '../../../../packages/features/bookings/components/EventTypeFilter';

import { SessionProvider } from 'next-auth/react';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    mockSession: {
      type: 'boolean',
      value: true,
      label: 'Mock Session',
    },
  });

  const mockSession = {
    data: state.mockSession.value ? { user: { id: '1', name: 'Test User' } } : null,
    status: state.mockSession.value ? 'authenticated' : 'unauthenticated',
  };

  return (
    <SessionProvider session={mockSession as any}>
      <EventTypeFilter />
    </SessionProvider>
  );
}