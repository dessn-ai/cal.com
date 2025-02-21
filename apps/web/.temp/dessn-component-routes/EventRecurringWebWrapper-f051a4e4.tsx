import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/platform/atoms/event-types/wrappers/EventRecurringWebWrapper';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    eventType: {
      type: 'dropdown',
      value: 'ONE_ON_ONE',
      options: ['ONE_ON_ONE', 'GROUP', 'COLLECTIVE'],
      label: 'Event Type',
    },
    customClassNames: {
      type: 'string',
      value: '{}',
      label: 'Custom Class Names',
    },
  });

  const eventType = {
    id: 1,
    slug: 'test-event',
    title: 'Test Event',
    length: 60,
    recurringEvent: null,
    type: state.eventType.value,
  };

  const customClassNames = JSON.parse(state.customClassNames.value);

  return (
    <ImportedComponent
      eventType={eventType}
      customClassNames={customClassNames}
    />
  );
}