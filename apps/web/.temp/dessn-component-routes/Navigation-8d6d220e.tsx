import React from 'react';
import { useParentState } from '../useIframeState';
import { Navigation } from '../../../../packages/features/shell/navigation/Navigation';
import { OrgBrandingProvider } from '../../../../packages/features/ee/organizations/context/provider';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    isPlatformNavigation: {
      type: "boolean",
      value: false,
      label: "Is Platform Navigation",
    },
  });

  // Mock organization branding data
  const mockOrgBranding = {
    theme: null,
    organization: null,
    isLoading: false,
  };

  return (
    <OrgBrandingProvider value={mockOrgBranding}>
      <Navigation isPlatformNavigation={state.isPlatformNavigation.value} />
    </OrgBrandingProvider>
  );
}