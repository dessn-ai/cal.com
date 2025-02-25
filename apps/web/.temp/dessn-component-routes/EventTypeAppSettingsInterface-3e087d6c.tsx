import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/app-store/hitpay/components/EventTypeAppSettingsInterface';


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
        seatsPerTimeSlot: 5,
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

  const mockGetAppData = (key: string) => {
    const mockData: Record<string, any> = {
      price: 1000,
      currency: 'USD',
      paymentOption: 'HOLD',
      enabled: true
    };
    return mockData[key];
  };

  const mockSetAppData = (key: string, value: any) => {
    console.log(`Setting ${key} to ${value}`);
  };

  return (
    <ImportedComponent
      eventType={JSON.parse(state.eventType.value)}
      getAppData={mockGetAppData}
      setAppData={mockSetAppData}
      disabled={state.disabled.value}
      slug={state.slug.value}
    />
  );
}