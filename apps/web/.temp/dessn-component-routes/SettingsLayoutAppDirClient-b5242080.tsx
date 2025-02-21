import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../app/(use-page-wrapper)/settings/(settings-layout)/SettingsLayoutAppDirClient';
import { OrgBrandingProvider } from '@calcom/features/ee/organizations/context/provider';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    children: {
      type: "string",
      value: "<div>Sample Content</div>",
      label: "Children",
    },
    currentOrg: {
      type: "string",
      value: "null",
      label: "Current Organization",
    },
    otherTeams: {
      type: "string",
      value: "null",
      label: "Other Teams",
    },
    containerClassName: {
      type: "string",
      value: "",
      label: "Container Class Name",
    },
  });

  // Mock organization branding data
  const mockOrgBrand = {
    orgBrand: {
      id: 1,
      name: "Demo Organization",
      slug: "demo",
      logoUrl: null,
      fullDomain: "demo.cal.com",
      domainSuffix: "cal.com",
      role: "OWNER",
      theme: null,
      brandColor: "#292929",
      darkBrandColor: "#fafafa",
      metadata: {},
    }
  };

  return (
    <OrgBrandingProvider value={mockOrgBrand}>
      <ImportedComponent
        children={<div dangerouslySetInnerHTML={{ __html: state.children.value }} />}
        currentOrg={state.currentOrg.value === "null" ? null : JSON.parse(state.currentOrg.value)}
        otherTeams={state.otherTeams.value === "null" ? null : JSON.parse(state.otherTeams.value)}
        containerClassName={state.containerClassName.value}
      />
    </OrgBrandingProvider>
  );
}