import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/features/ee/organizations/pages/settings/profile';
import { useForm } from 'react-hook-form';
import { OrgBrandingProvider } from '../../../../packages/features/ee/organizations/context/provider';
import { TooltipProvider } from '@radix-ui/react-tooltip';
import { FeatureProvider } from '../../../../packages/features/flags/context/provider';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    name: {
      type: "string",
      value: "Sample Organization",
      label: "Organization Name",
    },
    logoUrl: {
      type: "string",
      value: "https://example.com/logo.png",
      label: "Logo URL",
    },
    banner: {
      type: "string",
      value: "https://example.com/banner.jpg",
      label: "Banner URL",
    },
    bio: {
      type: "string",
      value: "This is a sample organization bio.",
      label: "Bio",
    },
    slug: {
      type: "string",
      value: "sample-org",
      label: "Slug",
    },
    calVideoLogo: {
      type: "string",
      value: "https://example.com/cal-video-logo.png",
      label: "Cal Video Logo URL",
    },
  });

  const form = useForm({
    defaultValues: {
      name: state.name.value,
      logoUrl: state.logoUrl.value,
      banner: state.banner.value,
      bio: state.bio.value,
      slug: state.slug.value,
      calVideoLogo: state.calVideoLogo.value,
    },
  });

  // Mock organization data for the provider
  const mockOrgBrand = {
    id: 1,
    name: state.name.value,
    slug: state.slug.value,
    logoUrl: state.logoUrl.value,
    fullDomain: `${state.slug.value}.cal.com`,
    domainSuffix: "cal.com",
    role: "OWNER",
    theme: null,
    brandColor: "#292929",
    darkBrandColor: "#fafafa",
    metadata: {
      requestedSlug: state.slug.value,
      isOrganizationVerified: true,
      isOrganizationConfigured: true,
    },
  };

  // Mock feature flags
  const mockFeatureFlags = {
    features: {},
    isFeatureEnabled: () => false,
  };

  return (
    <TooltipProvider>
      <FeatureProvider value={mockFeatureFlags}>
        <OrgBrandingProvider value={{ orgBrand: mockOrgBrand }}>
          <ImportedComponent />
        </OrgBrandingProvider>
      </FeatureProvider>
    </TooltipProvider>
  );
}