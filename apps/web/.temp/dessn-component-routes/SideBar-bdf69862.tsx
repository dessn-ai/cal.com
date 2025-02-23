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
    organization: {
      id: 1,
      slug: 'test-org',
      name: 'Test Organization',
      logo: null,
      brandColor: '#292929',
      darkBrandColor: '#fafafa',
      theme: null,
    },
  };

  // Create the correct organization branding structure based on the provider implementation
  const mockOrgBrand = {
    id: 1,
    name: 'Test Organization',
    slug: 'test-org',
    logoUrl: null,
    fullDomain: 'test-org.cal.com',
    domainSuffix: 'cal.com',
    role: 'MEMBER',
    theme: null,
    brandColor: '#292929',
    darkBrandColor: '#fafafa',
    logo: null,
  };

  return (
    <OrgBrandingProvider value={{ orgBrand: mockOrgBrand }}>
      <div style={{ height: '100vh', backgroundColor: '#f3f4f6' }}>
        <SideBar 
          bannersHeight={state.bannersHeight.value} 
          isPlatformUser={state.isPlatformUser.value}
          user={mockUser}
        />
      </div>
    </OrgBrandingProvider>
  );
}