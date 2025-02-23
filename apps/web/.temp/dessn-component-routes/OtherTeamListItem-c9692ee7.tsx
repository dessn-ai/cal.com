import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/features/ee/organizations/pages/components/OtherTeamListItem';
import { OrgBrandingProvider } from '../../../../packages/features/ee/organizations/context/provider';

// Mock I18nProvider since we can't resolve the actual import
const MockI18nProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <>{children}</>;
};

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    team: {
      type: "string",
      value: JSON.stringify({
        id: 1,
        name: "Sample Team",
        slug: "sample-team",
        logoUrl: "https://example.com/logo.png"
      }),
      label: "Team"
    },
    key: {
      type: "number",
      value: 1,
      label: "Key"
    },
    isPending: {
      type: "boolean",
      value: false,
      label: "Is Pending"
    },
    hideDropdown: {
      type: "boolean",
      value: false,
      label: "Hide Dropdown"
    }
  });

  const onActionSelect = (text: string) => {
    console.log("Action selected:", text);
  };

  const setHideDropdown = (value: boolean) => {
    setState("hideDropdown", value);
  };

  const mockOrgBrand = {
    id: 1,
    name: "Mock Organization",
    slug: "mock-org",
    logoUrl: null,
    fullDomain: "mock-org.cal.com",
    domainSuffix: "cal.com",
    role: "OWNER",
    theme: null,
    brandColor: "#292929",
    darkBrandColor: "#fafafa"
  };

  return (
    <MockI18nProvider>
      <OrgBrandingProvider value={{ orgBrand: mockOrgBrand }}>
        <ImportedComponent
          team={JSON.parse(state.team.value)}
          key={state.key.value}
          onActionSelect={onActionSelect}
          isPending={state.isPending.value}
          hideDropdown={state.hideDropdown.value}
          setHideDropdown={setHideDropdown}
        />
      </OrgBrandingProvider>
    </MockI18nProvider>
  );
}