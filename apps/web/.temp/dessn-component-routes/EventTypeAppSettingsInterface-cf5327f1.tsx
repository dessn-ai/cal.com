import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/app-store/giphy/components/EventTypeAppSettingsInterface';


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
      value: 'sample-event',
      label: 'Slug'
    }
  });

  const getAppData = (key: string) => {
    return key === 'thankYouPage' ? 'https://example.com/thank-you' : null;
  };

  const setAppData = (key: string, value: any) => {
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