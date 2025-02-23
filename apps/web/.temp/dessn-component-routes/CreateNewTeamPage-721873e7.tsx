import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../modules/settings/teams/new/create-new-team-view';
import { WizardLayout } from '@calcom/ui';

// Mock the useOrgBranding hook
jest.mock('@calcom/features/ee/organizations/context/provider', () => ({
  useOrgBranding: () => ({
    theme: null,
    logo: null,
    brandColor: null,
    darkBrandColor: null,
    organizationName: "Test Organization",
    isLoading: false,
  }),
}));

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    returnTo: {
      type: "string",
      value: "/teams",
      label: "Return To URL",
    },
    slug: {
      type: "string",
      value: "my-team",
      label: "Team Slug",
    },
  });

  // Mock the next/navigation router
  const mockRouter = {
    push: (url: string) => console.log(`Navigating to: ${url}`),
  };

  // Mock the telemetry
  const mockTelemetry = {
    event: (eventName: string) => console.log(`Telemetry event: ${eventName}`),
  };

  return (
    <WizardLayout currentStep={1} maxSteps={3}>
      <ImportedComponent />
    </WizardLayout>
  );
}