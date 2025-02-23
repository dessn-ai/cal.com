import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../app/(use-page-wrapper)/settings/(settings-layout)/SettingsLayoutAppDirClient';

// Mock the organization branding data
const mockOrgBranding = {
  theme: {
    brand: {
      text: "#292929",
      background: "#ffffff",
    },
  },
  logo: "/org-logo.png",
  brandColor: "#292929",
  darkBrandColor: "#ffffff",
  organizationName: "Test Organization",
  hideBranding: false,
  organizationId: 1,
  slug: "test-org",
  fullDomain: "test-org.cal.com",
  isOrganizationConfigured: true,
  orgUsername: "test-org",
};

// Create virtual module for mocking
if (import.meta.hot) {
  import.meta.hot.accept('@calcom/features/ee/organizations/context/provider', (mod) => {
    mod.useOrgBranding = () => mockOrgBranding;
    mod.OrgBrandingProvider = ({ children }) => <>{children}</>;
  });
}

// Mock the useOrgBranding hook directly
const useOrgBranding = () => mockOrgBranding;

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

  // Let's try to render without the provider since we're mocking the hook
  return (
    <ImportedComponent
      children={<div dangerouslySetInnerHTML={{ __html: state.children.value }} />}
      currentOrg={{
        id: 1,
        name: "Test Organization",
        slug: "test-org",
        members: [],
        metadata: {},
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      }}
      otherTeams={state.otherTeams.value === "null" ? null : JSON.parse(state.otherTeams.value)}
      containerClassName={state.containerClassName.value}
    />
  );
}

// Mock the module
const mockModule = {
  useOrgBranding,
  OrgBrandingProvider: ({ children }) => <>{children}</>,
};

// Assign to window for global access
if (typeof window !== 'undefined') {
  window.__DESSN_MOCK_MODULES__ = {
    ...window.__DESSN_MOCK_MODULES__,
    '@calcom/features/ee/organizations/context/provider': mockModule,
  };
}