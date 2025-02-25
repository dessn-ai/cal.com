import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/platform/atoms/event-types/wrappers/EventSetupTabWebWrapper';
import { SessionProvider, useSession } from 'next-auth/react';
import { OrgBrandingProvider } from '../../../../packages/features/ee/organizations/context/provider';

// Safe wrapper component that handles session data
const SafeEventSetupTabWebWrapper = (props: any) => {
  const session = useSession();
  
  // Ensure session data is available before rendering
  if (session.status !== 'authenticated' || !session.data?.user) {
    return null;
  }

  return <ImportedComponent {...props} />;
};

export default function ComponentPreview() {
  const defaultEventType = {
    id: 1,
    title: 'Default Event',
    length: 30,
    description: '',
    locations: [],
    schedulingType: null,
    length_unit: "minutes",
  };

  const [state] = useParentState({
    eventType: {
      type: 'string',
      value: defaultEventType,
      label: 'Event Type',
    },
    locationOptions: {
      type: 'string',
      value: [],
      label: 'Location Options',
    },
    team: {
      type: 'string',
      value: {},
      label: 'Team',
    },
    teamMembers: {
      type: 'string',
      value: [],
      label: 'Team Members',
    },
    destinationCalendar: {
      type: 'string',
      value: {},
      label: 'Destination Calendar',
    },
  });

  const mockSession = {
    user: {
      id: 1,
      name: 'Test User',
      email: 'test@example.com',
      username: 'testuser',
      org: {
        id: 1,
        name: 'Default Organization',
        slug: 'default-org',
      },
      organizationId: 1,
      timeZone: 'UTC',
      defaultScheduleId: null,
      completedOnboarding: true,
      timeFormat: 12,
      weekStart: 'Monday',
    },
    expires: '2024-01-01',
  };

  const parseStateValue = (value: any) => {
    if (typeof value === 'string') {
      try {
        return JSON.parse(value);
      } catch {
        return value;
      }
    }
    return value;
  };

  const mockOrgBrand = {
    orgBrand: {
      id: 1,
      name: 'Default Organization',
      slug: 'default-org',
      logoUrl: null,
      fullDomain: 'https://default-org.cal.com',
      domainSuffix: 'cal.com',
      role: 'ADMIN',
      theme: null,
      brandColor: '#292929',
      darkBrandColor: '#fafafa',
      hideBranding: false,
    },
  };

  return (
    <SessionProvider session={mockSession}>
      <OrgBrandingProvider value={mockOrgBrand}>
        <SafeEventSetupTabWebWrapper
          eventType={parseStateValue(state.eventType.value)}
          locationOptions={parseStateValue(state.locationOptions.value)}
          team={parseStateValue(state.team.value)}
          teamMembers={parseStateValue(state.teamMembers.value)}
          destinationCalendar={parseStateValue(state.destinationCalendar.value)}
        />
      </OrgBrandingProvider>
    </SessionProvider>
  );
}