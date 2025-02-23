import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/features/eventtypes/components/CreateEventTypeDialog';
import { OrgBrandingProvider } from '@calcom/features/ee/organizations/context/provider';
import { MembershipRole } from '@calcom/prisma/enums';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    profileOptions: {
      type: 'string',
      value: JSON.stringify([
        {
          teamId: 1,
          label: 'Team A',
          image: 'https://example.com/team-a.jpg',
          membershipRole: MembershipRole.MEMBER,
        },
        {
          teamId: null,
          label: 'Personal',
          image: 'https://example.com/personal.jpg',
          membershipRole: null,
        },
        {
          teamId: 2,
          label: 'Team B',
          image: 'https://example.com/team-b.jpg',
          membershipRole: MembershipRole.ADMIN,
        },
      ]),
      label: 'Profile Options',
    },
  });

  const profileOptions = JSON.parse(state.profileOptions.value);

  // Mock data matching the exact OrganizationBranding type
  const mockOrgBrand = {
    id: 1,
    name: 'Test Organization',
    slug: 'test-org',
    logoUrl: null,
    fullDomain: 'test-org.cal.com',
    domainSuffix: 'cal.com',
    role: MembershipRole.OWNER,
    theme: null,
    brandColor: '#292929',
    darkBrandColor: '#fafafa',
    backgroundImage: null,
  };

  return (
    <OrgBrandingProvider value={{ orgBrand: mockOrgBrand }}>
      <ImportedComponent profileOptions={profileOptions} />
    </OrgBrandingProvider>
  );
}