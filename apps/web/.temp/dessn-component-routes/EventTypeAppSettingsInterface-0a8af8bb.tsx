import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/app-store/paypal/components/EventTypeAppSettingsInterface';

import { useForm } from 'react-hook-form';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    eventType: {
      type: 'dropdown',
      value: 'regular',
      options: ['regular', 'recurring', 'seats'],
      label: 'Event Type',
    },
    price: {
      type: 'number',
      value: 1000,
      label: 'Price',
    },
    currency: {
      type: 'string',
      value: 'USD',
      label: 'Currency',
    },
    paymentOption: {
      type: 'string',
      value: 'HOLD',
      label: 'Payment Option',
    },
    enabled: {
      type: 'boolean',
      value: true,
      label: 'Enabled',
    },
  });

  const { control } = useForm();

  const mockEventType = {
    id: 1,
    title: 'Test Event',
    description: 'This is a test event',
    teamId: null,
    length: 60,
    recurringEvent: state.eventType.value === 'recurring' ? { count: 1 } : null,
    seatsPerTimeSlot: state.eventType.value === 'seats' ? 5 : null,
    team: null,
    URL: 'https://example.com/event',
  };

  const mockGetAppData = (key: string) => {
    switch (key) {
      case 'price':
        return state.price.value;
      case 'currency':
        return state.currency.value;
      case 'paymentOption':
        return state.paymentOption.value;
      case 'enabled':
        return state.enabled.value;
      default:
        return null;
    }
  };

  const mockSetAppData = (key: string, value: any) => {
    switch (key) {
      case 'price':
        setState('price', value);
        break;
      case 'currency':
        setState('currency', value);
        break;
      case 'paymentOption':
        setState('paymentOption', value);
        break;
      case 'enabled':
        setState('enabled', value);
        break;
    }
  };

  return (
    <ImportedComponent
      eventType={mockEventType}
      getAppData={mockGetAppData}
      setAppData={mockSetAppData}
      disabled={false}
      slug="test-event"
    />
  );
}