import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/app-store/stripepayment/components/EventTypeAppSettingsInterface';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    eventType: {
      type: 'object',
      value: {
        id: 1,
        title: 'Sample Event',
        description: 'This is a sample event',
        teamId: 2,
        length: 60,
        recurringEvent: null,
        seatsPerTimeSlot: null,
        team: null,
        URL: 'https://example.com/event'
      },
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
    switch (key) {
      case 'price':
        return 1000;
      case 'currency':
        return 'usd';
      case 'paymentOption':
        return 'HOLD';
      case 'enabled':
        return true;
      case 'refundPolicy':
        return 'NEVER';
      default:
        return undefined;
    }
  };

  const mockSetAppData = (key: string, value: any) => {
    console.log(`Setting ${key} to ${value}`);
  };

  return (
    <ImportedComponent
      eventType={state.eventType.value}
      getAppData={mockGetAppData}
      setAppData={mockSetAppData}
      disabled={state.disabled.value}
      slug={state.slug.value}
    />
  );
}