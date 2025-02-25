import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../modules/settings/teams/[id]/event-types-view';

import { useRouter } from 'next/navigation';
import { trpc } from '@calcom/trpc/react';
import { useCompatSearchParams } from '@calcom/lib/hooks/useCompatSearchParams';
import * as createEventTypeModule from '@calcom/lib/hooks/useCreateEventType';
import { useLocale } from '@calcom/lib/hooks/useLocale';

// Mock the entire prisma client
const mockPrisma = {
  SchedulingType: {
    ROUND_ROBIN: "ROUND_ROBIN",
    COLLECTIVE: "COLLECTIVE",
    MANAGED: "MANAGED"
  }
};

// Use the mock prisma client's SchedulingType
const { SchedulingType } = mockPrisma;

// Mock the useOrgBranding hook
const mockOrgBranding = {
  logo: '',
  name: 'Mock Organization',
  brand: {
    logo: '',
    brandColor: '#292929',
    darkBrandColor: '#fafafa',
    theme: null,
  },
  hideBranding: false,
  orgSlug: 'mock-org',
};

// Mock the hook before any component renders
jest.mock('@calcom/features/ee/organizations/context/provider', () => ({
  useOrgBranding: () => ({
    orgBranding: mockOrgBranding,
    isLoading: false,
  }),
}));

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    teamId: {
      type: "number",
      value: 1,
      label: "Team ID",
    },
  });

  const router = useRouter();
  const searchParams = useCompatSearchParams();
  const { t } = useLocale();

  // Mock trpc query
  const mockTeamData = {
    id: 1,
    name: 'Mock Team',
    slug: 'mock-team',
    schedulingType: SchedulingType.COLLECTIVE,
    members: [],
    metadata: {},
    logo: null,
    bio: null,
    hideBranding: false,
    isPrivate: false,
    parent: null,
    theme: null,
  };

  // Set up TRPC mocks
  React.useEffect(() => {
    trpc.viewer.teams.get.useQuery = () => ({
      data: mockTeamData,
      isLoading: false,
      isError: false,
    });
  }, []);

  // Override the useCreateEventType implementation
  const mockCreateEventType = {
    form: {
      register: () => ({}),
      setValue: () => {},
      watch: () => ({}),
      handleSubmit: (fn: any) => fn,
      control: {},
      formState: {
        errors: {},
        isSubmitting: false,
      },
      getValues: () => ({}),
      reset: () => {},
    },
    createMutation: {
      isPending: false,
      mutate: (data: any) => Promise.resolve(),
      isSuccess: false,
      isError: false,
    },
    isManagedEventType: false,
  };

  // Replace the original implementation
  React.useEffect(() => {
    // @ts-ignore - Mocking the hook
    createEventTypeModule.useCreateEventType = () => mockCreateEventType;

    // Mock the useOrgBranding hook implementation
    const orgModule = require('@calcom/features/ee/organizations/context/provider');
    // @ts-ignore - Mocking the hook
    orgModule.useOrgBranding = () => ({
      orgBranding: mockOrgBranding,
      isLoading: false,
    });
  }, []);

  return <ImportedComponent />;
}