import React from 'react';
import { useParentState } from '../useIframeState';
import { SessionProvider } from 'next-auth/react';

// Create a mock version of the EventSetupTabWebWrapper
const MockEventSetupTabWebWrapper = (props) => {
  // Mock the data that would normally come from useOrgBranding
  const brandingData = {
    theme: null,
    orgSlug: 'default-org',
    hideBranding: false,
    orgFullDomain: 'default-org.cal.com',
    fullDomain: 'default-org.cal.com',
  };

  return (
    <div className="event-setup-tab">
      <h2>Event Setup Tab</h2>
      <div>
        <h3>Event Type</h3>
        <pre>{JSON.stringify(props.eventType, null, 2)}</pre>
      </div>
      <div>
        <h3>Location Options</h3>
        <pre>{JSON.stringify(props.locationOptions, null, 2)}</pre>
      </div>
      <div>
        <h3>Team</h3>
        <pre>{JSON.stringify(props.team, null, 2)}</pre>
      </div>
      <div>
        <h3>Team Members</h3>
        <pre>{JSON.stringify(props.teamMembers, null, 2)}</pre>
      </div>
      <div>
        <h3>Destination Calendar</h3>
        <pre>{JSON.stringify(props.destinationCalendar, null, 2)}</pre>
      </div>
      <div>
        <h3>Branding Data</h3>
        <pre>{JSON.stringify(brandingData, null, 2)}</pre>
      </div>
    </div>
  );
};

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    eventType: {
      type: 'string',
      value: '{"id": 1, "title": "Default Event"}',
      label: 'Event Type',
    },
    locationOptions: {
      type: 'string',
      value: '[]',
      label: 'Location Options',
    },
    team: {
      type: 'string',
      value: '{}',
      label: 'Team',
    },
    teamMembers: {
      type: 'string',
      value: '[]',
      label: 'Team Members',
    },
    destinationCalendar: {
      type: 'string',
      value: '{}',
      label: 'Destination Calendar',
    },
  });

  const mockSession = {
    data: {
      user: {
        org: {
          id: 1,
        },
      },
    },
    status: 'authenticated',
  };

  try {
    return (
      <SessionProvider session={mockSession as any}>
        <MockEventSetupTabWebWrapper
          eventType={JSON.parse(state.eventType.value)}
          locationOptions={JSON.parse(state.locationOptions.value)}
          team={JSON.parse(state.team.value)}
          teamMembers={JSON.parse(state.teamMembers.value)}
          destinationCalendar={JSON.parse(state.destinationCalendar.value)}
        />
      </SessionProvider>
    );
  } catch (error) {
    console.error('Error parsing JSON:', error);
    return <div>Error: Failed to parse component data</div>;
  }
}