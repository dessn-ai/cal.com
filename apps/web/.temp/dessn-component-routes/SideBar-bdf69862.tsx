import React from 'react';
import { useParentState } from '../useIframeState';
import { SideBar } from '../../../../packages/features/shell/SideBar';
import { OrgBrandingProvider } from '../../../../packages/features/ee/organizations/context/provider';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    bannersHeight: {
      type: "number",
      value: 0,
      label: "Banners Height",
    },
    isPlatformUser: {
      type: "boolean",
      value: false,
      label: "Is Platform User",
    },
  });

  const mockUser = {
    id: '1',
    name: 'John Doe',
    email: 'john@example.com',
    username: 'johndoe',
    avatarUrl: 'https://example.com/avatar.jpg',
    role: 'USER',
  };

  // Mock organization branding data
  const mockOrgBranding = {
    theme: null,
    organization: null,
    isLoading: false,
  };

  return (
    <OrgBrandingProvider value={mockOrgBranding}>
      <SideBar 
        bannersHeight={state.bannersHeight.value} 
        isPlatformUser={state.isPlatformUser.value}
        user={mockUser}
      />
    </OrgBrandingProvider>
  );
}