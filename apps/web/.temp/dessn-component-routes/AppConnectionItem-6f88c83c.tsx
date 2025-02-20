import React from 'react';
import { useParentState } from '../useIframeState';
import { AppConnectionItem } from '../../components/getting-started/components/AppConnectionItem';

// Mock TRPCProvider since we can't access the real one
const MockTRPCProvider = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    title: {
      type: "string",
      value: "Sample App",
      label: "Title",
    },
    description: {
      type: "string",
      value: "This is a sample app description",
      label: "Description",
    },
    logo: {
      type: "string",
      value: "https://example.com/logo.png",
      label: "Logo URL",
    },
    type: {
      type: "dropdown",
      value: "other_calendar",
      options: ["other_calendar", "messaging_calendar", "payment_calendar", "video_calendar", "other_other", "automation_other", "analytics_other", "crm_other"],
      label: "App Type",
    },
    installed: {
      type: "boolean",
      value: false,
      label: "Installed",
    },
    isDefault: {
      type: "boolean",
      value: false,
      label: "Is Default",
    },
    defaultInstall: {
      type: "boolean",
      value: false,
      label: "Default Install",
    },
    slug: {
      type: "string",
      value: "sample-app",
      label: "Slug",
    },
  });

  const dependencyData = [
    { name: "Calendar", installed: true },
    { name: "Video", installed: false },
  ];

  return (
    <MockTRPCProvider>
      <AppConnectionItem
        title={state.title.value}
        description={state.description.value}
        logo={state.logo.value}
        type={state.type.value as any}
        installed={state.installed.value}
        isDefault={state.isDefault.value}
        defaultInstall={state.defaultInstall.value}
        slug={state.slug.value}
        dependencyData={dependencyData}
      />
    </MockTRPCProvider>
  );
}