import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../components/apps/AdditionalCalendarSelector';

import { trpc } from '@calcom/trpc/react';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    isPending: {
      type: "boolean",
      value: false,
      label: "Is Pending",
    },
  });

  // Mock trpc.viewer.integrations.useQuery
  trpc.viewer.integrations.useQuery = () => ({
    data: {
      items: [
        { name: 'Google Calendar', slug: 'google-calendar', logo: 'https://example.com/google-calendar.png', type: 'google_calendar' },
        { name: 'Apple Calendar', slug: 'apple-calendar', logo: 'https://example.com/apple-calendar.png', type: 'apple_calendar' },
      ],
    },
    isLoading: false,
    isError: false,
  });

  return <ImportedComponent isPending={state.isPending.value} />;
}