import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../modules/settings/teams/[id]/event-types-view';
import { useRouter } from 'next/navigation';
import { trpc } from '@calcom/trpc/react';
import { useCompatSearchParams } from '@calcom/lib/hooks/useCompatSearchParams';
import { useLocale } from '@calcom/lib/hooks/useLocale';
import * as createEventTypeModule from '@calcom/lib/hooks/useCreateEventType';

// Mock organization data
const mockOrganization = {
  id: 1,
  slug: 'mock-org',
  name: 'Mock Organization',
  logo: '',
  brand: {
    brandColor: '#292929',
    darkBrandColor: '#ffffff',
    theme: null,
    hideBranding: false,
  },
  orgUsername: 'mock-org',
  metadata: {},
};

// Mock the module before any component rendering
import * as orgBrandingModule from '@calcom/features/ee/organizations/context/provider';

// Override the useOrgBranding hook immediately
(orgBrandingModule as any).useOrgBranding = () => ({
  organization: mockOrganization,
  isLoading: false,
});

export default function ComponentPreview() {
  const [state] = useParentState({
    teamId: {
      type: "number",
      value: 1,
      label: "Team ID",
    },
  });

  const router = useRouter();
  const searchParams = useCompatSearchParams();
  const { t } = useLocale();

  // Mock team data
  const mockTeamData = {
    slug: 'mock-team',
    name: 'Mock Team',
    id: 1,
  };

  // Override hooks before component mounts
  React.useEffect(() => {
    // Mock trpc query
    trpc.viewer.teams.get.useQuery = () => ({
      data: mockTeamData,
      isLoading: false,
      isError: false,
    });

    // Mock createEventType hook
    const mockCreateEventType = {
      form: {
        register: () => ({}),
        setValue: () => {},
        watch: () => ({}),
        handleSubmit: (fn: any) => fn,
        control: {},
      },
      createMutation: {
        isPending: false,
        mutate: () => Promise.resolve(),
      },
      isManagedEventType: false,
    };

    // @ts-ignore - Mocking the hook
    createEventTypeModule.useCreateEventType = () => mockCreateEventType;
  }, []);

  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <ImportedComponent />
    </React.Suspense>
  );
}