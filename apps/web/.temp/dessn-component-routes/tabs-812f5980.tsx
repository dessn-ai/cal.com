import React from 'react';
import { useParentState } from '../useIframeState';
import { tabs } from '../../../../packages/features/embed/lib/EmbedTabs';
import { OrgBrandingProvider } from '../../../../packages/features/ee/organizations/context/provider';

const mockOrgBranding = {
  orgBranding: {
    logo: '',
    brandColor: '#292929',
    darkBrandColor: '#fafafa',
    theme: null,
    backgroundImage: null,
  },
  isLoading: false,
  setOrgBranding: () => {},
  resetOrgBranding: () => {},
};

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    embedType: {
      type: "dropdown",
      value: "inline",
      options: ["inline", "floating-popup", "element-click"],
      label: "Embed Type",
    },
    calLink: {
      type: "string",
      value: "johndoe/meeting",
      label: "Cal Link",
    },
    namespace: {
      type: "string",
      value: "myCalendar",
      label: "Namespace",
    },
  });

  const previewState = {
    theme: "light",
    palette: {
      brandColor: "#000000",
      darkBrandColor: "#FFFFFF",
    },
    hideEventTypeDetails: false,
    layout: "month_view",
    inline: {
      width: "100%",
      height: "100%",
    },
    floatingPopup: {},
    elementClick: {},
  };

  const TabComponent = tabs.find((tab) => tab.name === "HTML")?.Component;

  if (!TabComponent) {
    return null;
  }

  return (
    <OrgBrandingProvider value={mockOrgBranding}>
      <TabComponent
        embedType={state.embedType.value}
        calLink={state.calLink.value}
        previewState={previewState}
        namespace={state.namespace.value}
      />
    </OrgBrandingProvider>
  );
}