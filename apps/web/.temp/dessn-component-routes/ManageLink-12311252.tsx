import React from 'react';
import { useParentState } from '../useIframeState';
import { ManageLink } from '../../../../packages/emails/src/components/ManageLink';

// Define TimeFormat enum locally instead of importing from @calcom/types/Calendar
enum TimeFormat {
  TWELVE_HOUR = 'h:mma',
  TWENTY_FOUR_HOUR = 'HH:mm'
}

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    calEvent: {
      type: 'object',
      value: {
        type: 'default',
        title: 'Meeting with John Doe',
        startTime: new Date().toISOString(),
        endTime: new Date(Date.now() + 3600000).toISOString(),
        organizer: {
          name: 'Jane Smith',
          email: 'jane@example.com',
          timeZone: 'America/New_York',
          language: {
            locale: 'en'
          },
        },
        attendees: [
          {
            name: 'John Doe',
            email: 'john@example.com',
            timeZone: 'America/Los_Angeles',
            language: {
              locale: 'en'
            },
          },
        ],
        uid: '12345',
        recurringEvent: null,
        team: {
          name: 'Team A',
          members: [],
          id: 1,
        },
      },
      label: 'Calendar Event',
    },
    attendee: {
      type: 'object',
      value: {
        name: 'John Doe',
        email: 'john@example.com',
        timeZone: 'America/Los_Angeles',
        language: {
          locale: 'en'
        },
        timeFormat: TimeFormat.TWELVE_HOUR,
      },
      label: 'Attendee',
    },
  });

  const calEventWithTranslations = React.useMemo(() => {
    const translate = (key: string) => key;
    
    return {
      ...state.calEvent.value,
      organizer: {
        ...state.calEvent.value.organizer,
        language: {
          ...state.calEvent.value.organizer.language,
          translate,
        },
      },
      attendees: state.calEvent.value.attendees.map(attendee => ({
        ...attendee,
        language: {
          ...attendee.language,
          translate,
        },
      })),
    };
  }, [state.calEvent.value]);

  const attendeeWithTranslations = React.useMemo(() => {
    const translate = (key: string) => key;
    
    return {
      ...state.attendee.value,
      language: {
        ...state.attendee.value.language,
        translate,
      },
    };
  }, [state.attendee.value]);

  return (
    <ManageLink 
      calEvent={calEventWithTranslations} 
      attendee={attendeeWithTranslations} 
    />
  );
}