import React from 'react';
import { useParentState } from '../useIframeState';
import { OtherTeamsListing } from '../../../../packages/features/ee/organizations/pages/components/OtherTeamsListing';
import { trpc } from '@calcom/trpc/react';

// Create a simple mock for i18n
const mockI18n = {
  defaultLocale: 'en',
  locale: 'en',
  i18n: {
    defaultLocale: 'en',
    locale: 'en',
  },
};

// Mock I18nProvider component
const I18nProvider = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

// Mock the trpc hook
const mockUseQuery = () => ({
  data: [],
  isPending: false,
  error: null,
});

// Mock the trpc object
const mockTrpc = {
  viewer: {
    organizations: {
      listOtherTeams: {
        useQuery: mockUseQuery,
      },
    },
  },
};

// Mock the useLocale hook
const mockUseLocale = () => ({
  t: (key: string) => key,
  i18n: mockI18n,
});

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    isPending: {
      type: "boolean",
      value: false,
      label: "Is Loading",
    },
    hasError: {
      type: "boolean",
      value: false,
      label: "Has Error",
    },
    teamsCount: {
      type: "number",
      value: 0,
      label: "Number of Teams",
    },
  });

  // Create mock data based on state
  const mockData = Array(state.teamsCount.value).fill({ id: 1, name: 'Team' });

  return (
    <I18nProvider>
      <OtherTeamsListing />
    </I18nProvider>
  );
}