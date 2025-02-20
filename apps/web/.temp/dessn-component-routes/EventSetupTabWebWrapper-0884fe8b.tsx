import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/platform/atoms/event-types/wrappers/EventSetupTabWebWrapper';
import { SessionProvider } from 'next-auth/react';
import { OrgBrandingProvider } from '@calcom/features/ee/organizations/context/provider';
import { FormProvider, useForm } from 'react-hook-form';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    eventType: {
      type: 'string',
      value: JSON.stringify({
        id: 1,
        title: 'Default Event',
        length: 30,
        description: '',
        locations: [],
        customInputs: [],
        schedule: null,
        periodType: 'UNLIMITED',
        hidden: false,
        position: 0
      }),
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

  const session = {
    user: {
      id: 1,
      name: 'Test User',
      email: 'test@example.com',
      username: 'testuser',
      org: {
        id: 1,
        name: 'Test Org',
        slug: 'test-org',
      },
    },
    expires: '2024-01-01',
  };

  const mockOrgBrandingValue = {
    orgBrand: {
      id: 1,
      slug: 'test-org',
      name: 'Test Org',
      fullDomain: 'test-org.cal.com',
      domainSuffix: 'cal.com',
      role: 'ADMIN',
      theme: null,
      hideBranding: false,
      brandColor: '#292929',
      darkBrandColor: '#fafafa',
      logo: null,
    }
  };

  // Initialize form methods
  const formMethods = useForm({
    defaultValues: {
      title: 'Default Event',
      slug: 'default-event',
      length: 30,
      description: '',
      locations: [],
      customInputs: [],
      schedule: null,
      periodType: 'UNLIMITED',
      hidden: false,
      position: 0,
    },
  });

  try {
    return (
      <SessionProvider 
        session={session}
        refetchInterval={0}
        refetchOnWindowFocus={false}
      >
        <OrgBrandingProvider value={mockOrgBrandingValue}>
          <FormProvider {...formMethods}>
            <ImportedComponent
              eventType={JSON.parse(state.eventType.value)}
              locationOptions={JSON.parse(state.locationOptions.value)}
              team={JSON.parse(state.team.value)}
              teamMembers={JSON.parse(state.teamMembers.value)}
              destinationCalendar={JSON.parse(state.destinationCalendar.value)}
            />
          </FormProvider>
        </OrgBrandingProvider>
      </SessionProvider>
    );
  } catch (error) {
    console.error('Failed to parse JSON:', error);
    return <div>Error: Failed to parse component data</div>;
  }
}