import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/app-store/alby/components/EventTypeAppSettingsInterface';

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
      value: 10,
      label: 'Price',
    },
    currency: {
      type: 'string',
      value: 'USD',
      label: 'Currency',
    },
    paymentOption: {
      type: 'dropdown',
      value: 'HOLD',
      options: ['HOLD', 'IMMEDIATE'],
      label: 'Payment Option',
    },
    enabled: {
      type: 'boolean',
      value: true,
      label: 'Enabled',
    },
  });

  const { control } = useForm();

  const eventTypeData = {
    id: 1,
    title: 'Sample Event',
    description: 'This is a sample event',
    teamId: 1,
    length: 60,
    recurringEvent: state.eventType.value === 'recurring' ? { count: 5 } : null,
    seatsPerTimeSlot: state.eventType.value === 'seats' ? 5 : null,
    team: { name: 'Sample Team' },
    URL: 'https://example.com/event',
  };

  const getAppData = (key: string) => {
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

  const setAppData = (key: string, value: any) => {
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
      eventType={eventTypeData}
      getAppData={getAppData}
      setAppData={setAppData}
      disabled={false}
      slug="sample-event"
    />
  );
}