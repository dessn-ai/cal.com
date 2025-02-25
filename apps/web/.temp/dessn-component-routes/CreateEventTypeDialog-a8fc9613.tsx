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

  // Mock data for OrgBrandingProvider
  const mockOrgBranding = {
    orgBranding: {
      logo: '',
      brandColor: '#292929',
      darkBrandColor: '#fafafa',
      theme: null,
      backgroundImage: null,
    },
    isLoading: false,
    error: null,
  };

  // Wrap the component with error boundary to handle potential errors
  return (
    <ErrorBoundary fallback={<div>Error loading component</div>}>
      <OrgBrandingProvider value={mockOrgBranding}>
        <ImportedComponent profileOptions={profileOptions} />
      </OrgBrandingProvider>
    </ErrorBoundary>
  );
}

// Simple error boundary component
class ErrorBoundary extends React.Component<
  { children: React.ReactNode; fallback: React.ReactNode },
  { hasError: boolean }
> {
  constructor(props: { children: React.ReactNode; fallback: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: any) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }

    return this.props.children;
  }
}