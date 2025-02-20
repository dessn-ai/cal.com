import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/features/ee/organizations/pages/settings/profile';
import { OrgBrandingProvider } from '../../../../packages/features/ee/organizations/context/provider';
import { useForm } from 'react-hook-form';
import { MembershipRole } from '@calcom/prisma/enums';

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

  const mockOrgBrand = {
    orgBrand: {
      id: 1,
      name: state.name.value,
      slug: state.slug.value,
      logoUrl: state.logoUrl.value,
      fullDomain: `${state.slug.value}.cal.com`,
      domainSuffix: 'cal.com',
      role: MembershipRole.OWNER,
      theme: null,
      brandColor: '#292929',
      darkBrandColor: '#fafafa',
      metadata: {},
    }
  };

  return (
    <OrgBrandingProvider value={mockOrgBrand}>
      <ImportedComponent />
    </OrgBrandingProvider>
  );
}