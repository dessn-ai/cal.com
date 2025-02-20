import React from 'react';
import { useParentState } from '../useIframeState';
import { UserFieldsResponses } from '../../../../packages/emails/src/components/UserFieldsResponses';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    isOrganizer: {
      type: "boolean",
      value: false,
      label: "Is Organizer",
    },
  });

  const mockCalEvent = {
    type: "default",
    title: "Mock Event",
    startTime: new Date().toISOString(),
    endTime: new Date(Date.now() + 3600000).toISOString(),
    organizer: {
      name: "John Doe",
      email: "john@example.com",
      timeZone: "America/New_York",
      language: {
        translate: (key: string) => key,
        locale: "en",
      },
    },
    attendees: [],
    userFieldsResponses: {
      "Custom Field 1": {
        label: "Custom Field 1",
        value: "Value 1",
      },
      "Custom Field 2": {
        label: "Custom Field 2",
        value: "Value 2",
      },
    },
  };

  const mockT = (key: string) => key;

  return (
    <UserFieldsResponses
      calEvent={mockCalEvent}
      t={mockT}
      isOrganizer={state.isOrganizer.value}
    />
  );
}