import React from 'react';
import { useParentState } from '../useIframeState';
import { WhoInfo } from '../../../../packages/emails/src/components/WhoInfo';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    calEvent: {
      type: 'string',
      value: JSON.stringify({
        organizer: {
          name: 'John Doe',
          email: 'john@example.com',
        },
        team: {
          members: [
            { name: 'Jane Smith', email: 'jane@example.com' },
            { name: 'Bob Johnson', email: 'bob@example.com' },
          ],
        },
        attendees: [
          { name: 'Alice Brown', email: 'alice@example.com', phoneNumber: '+1234567890' },
          { name: 'Charlie Davis', email: 'charlie@example.com' },
        ],
      }),
      label: 'Calendar Event',
    },
  });

  const mockT = (key: string) => {
    const translations: { [key: string]: string } = {
      who: 'Who',
      organizer: 'Organizer',
      team_member: 'Team Member',
      guest: 'Guest',
    };
    return translations[key] || key;
  };

  return (
    <WhoInfo
      calEvent={JSON.parse(state.calEvent.value)}
      t={mockT}
    />
  );
}