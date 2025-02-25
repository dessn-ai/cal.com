import React from 'react';
import { useParentState } from '../useIframeState';
import { getActionIcon } from '../../../../packages/features/ee/workflows/lib/getActionIcon';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    steps: {
      type: "string",
      value: JSON.stringify([
        {
          action: "EMAIL_HOST",
          sendTo: "test@example.com",
          template: "REMINDER",
          reminderBody: "Don't forget your appointment!",
          emailSubject: "Reminder",
          id: 1,
          sender: "sender@example.com",
          includeCalendarEvent: true,
          numberVerificationPending: false,
          numberRequired: false
        },
        {
          action: "SMS_ATTENDEE",
          sendTo: "+1234567890",
          template: "CUSTOM",
          reminderBody: "Your appointment is coming up!",
          emailSubject: null,
          id: 2,
          sender: null,
          includeCalendarEvent: false,
          numberVerificationPending: true,
          numberRequired: true
        }
      ]),
      label: "Workflow Steps"
    },
    className: {
      type: "string",
      value: "mr-2 inline h-4 w-4",
      label: "Icon Class Name"
    }
  });

  const steps = JSON.parse(state.steps.value);

  return getActionIcon(steps, state.className.value);
}