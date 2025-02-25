import React from 'react';
import { useParentState } from '../useIframeState';
import { DestinationCalendarSettings } from '../../../../packages/platform/atoms/destination-calendar/DestinationCalendar';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    connectedCalendars: {
      type: 'string',
      value: JSON.stringify([
        { integration: 'google_calendar', externalId: 'primary' },
        { integration: 'apple_calendar', externalId: 'personal' }
      ]),
      label: 'Connected Calendars'
    },
    destinationCalendar: {
      type: 'string',
      value: JSON.stringify({ integration: 'google_calendar', externalId: 'primary' }),
      label: 'Destination Calendar'
    },
    value: {
      type: 'string',
      value: 'google_calendar_primary',
      label: 'Selected Calendar'
    },
    isPending: {
      type: 'boolean',
      value: false,
      label: 'Is Pending'
    },
    hidePlaceholder: {
      type: 'boolean',
      value: false,
      label: 'Hide Placeholder'
    },
    maxWidth: {
      type: 'number',
      value: 500,
      label: 'Max Width'
    },
    hideAdvancedText: {
      type: 'boolean',
      value: false,
      label: 'Hide Advanced Text'
    },
    classNames: {
      type: 'string',
      value: '',
      label: 'Class Names'
    }
  });

  return (
    <DestinationCalendarSettings
      connectedCalendars={JSON.parse(state.connectedCalendars.value)}
      destinationCalendar={JSON.parse(state.destinationCalendar.value)}
      onChange={(value) => console.log('Calendar changed:', value)}
      isPending={state.isPending.value}
      hidePlaceholder={state.hidePlaceholder.value}
      value={state.value.value}
      maxWidth={state.maxWidth.value}
      hideAdvancedText={state.hideAdvancedText.value}
      classNames={state.classNames.value}
    />
  );
}