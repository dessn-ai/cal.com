import React from 'react';
import { useParentState } from '../useIframeState';
import { EventRecurringTab } from '../../../../packages/features/eventtypes/components/tabs/recurring/EventRecurringTab';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    eventType: {
      type: 'dropdown',
      value: 'oneOnOne',
      options: ['oneOnOne', 'group', 'collective'],
      label: 'Event Type',
    },
    metadata: {
      type: 'string',
      value: '{}',
      label: 'Metadata',
    },
    customClassNames: {
      type: 'string',
      value: '{}',
      label: 'Custom Class Names',
    },
  });

  const eventType = {
    ...state.eventType,
    metadata: JSON.parse(state.metadata.value),
  };

  const customClassNames = JSON.parse(state.customClassNames.value);

  return (
    <EventRecurringTab
      eventType={eventType}
      customClassNames={customClassNames}
    />
  );
}