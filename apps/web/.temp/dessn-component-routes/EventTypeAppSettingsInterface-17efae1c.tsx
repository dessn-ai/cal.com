import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/app-store/plausible/components/EventTypeAppSettingsInterface';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    eventType: {
      type: 'string',
      value: JSON.stringify({
        id: 1,
        title: 'Sample Event',
        description: 'This is a sample event',
        teamId: 2,
        length: 60,
        recurringEvent: null,
        seatsPerTimeSlot: 1,
        team: null,
        URL: 'https://example.com/event'
      }),
      label: 'Event Type'
    },
    disabled: {
      type: 'boolean',
      value: false,
      label: 'Disabled'
    },
    slug: {
      type: 'string',
      value: 'plausible',
      label: 'Slug'
    }
  });

  const getAppData = (key: string) => {
    if (key === 'PLAUSIBLE_URL') return 'https://plausible.io/js/script.js';
    if (key === 'trackingId') return 'example.com';
    return '';
  };

  const setAppData = (key: string, value: string) => {
    console.log(`Setting ${key} to ${value}`);
  };

  return (
    <ImportedComponent
      eventType={JSON.parse(state.eventType.value)}
      getAppData={getAppData}
      setAppData={setAppData}
      disabled={state.disabled.value}
      slug={state.slug.value}
    />
  );
}