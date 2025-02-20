import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/features/ee/workflows/pages/index';
import { SessionProvider } from 'next-auth/react';
import { trpc } from '@calcom/trpc/react';
import { OrgBrandingProvider } from '@calcom/features/ee/organizations/context/provider';

const mockSession = {
  user: {
    id: 1,
    name: 'John Doe',
    username: 'johndoe',
    email: 'john@example.com',
    organization: {
      id: 1,
      name: 'Default Organization',
      slug: 'default-org',
    },
  },
  hasValidLicense: true,
  expires: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString(),
};

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    filteredList: {
      type: 'string',
      value: JSON.stringify({
        totalCount: 5,
        filtered: [
          {
            id: 1,
            name: 'Sample Workflow 1',
            activeOn: [],
            steps: [],
            team: null,
          },
          {
            id: 2,
            name: 'Sample Workflow 2',
            activeOn: [],
            steps: [],
            team: null,
          },
        ],
      }),
      label: 'Filtered List',
    },
  });

  const parsedFilteredList = JSON.parse(state.filteredList.value);

  // Mock trpc
  trpc.viewer.workflows.filteredList.useQuery = () => ({
    data: parsedFilteredList,
    isPending: false,
  });

  trpc.viewer.workflows.create.useMutation = () => ({
    mutate: () => {},
    isPending: false,
  });

  // Mock organization branding data
  const orgBrandingValue = {
    orgBranding: {
      theme: null,
      orgSlug: mockSession.user.organization.slug,
      hideBranding: false,
      logo: '',
      name: mockSession.user.organization.name,
      isLoading: false,
    },
    setOrgBranding: () => {},
  };

  return (
    <SessionProvider session={mockSession}>
      <OrgBrandingProvider value={orgBrandingValue}>
        <div className="min-h-screen">
          <ImportedComponent filteredList={parsedFilteredList} />
        </div>
      </OrgBrandingProvider>
    </SessionProvider>
  );
}