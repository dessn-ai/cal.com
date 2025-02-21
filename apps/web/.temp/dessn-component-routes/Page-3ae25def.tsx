import React from 'react';
import { useParentState } from '../useIframeState';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// Create a new QueryClient instance
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
});

// Mock TRPC Provider component
const MockTRPCProvider = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

// Mock TooltipProvider
const MockTooltipProvider = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

// Mock FeatureProvider
const MockFeatureProvider = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

// Mock OrgBrandingProvider
const MockOrgBrandingProvider = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

// Mock the main component instead of importing it
const MockDsyncPage = ({
  getTranslate,
  SettingsHeader,
  DirectorySyncTeamView,
}: {
  getTranslate: (key: string) => string;
  SettingsHeader: React.ComponentType<{ children: React.ReactNode }>;
  DirectorySyncTeamView: React.ComponentType;
}) => {
  return (
    <div className="dsync-page">
      <SettingsHeader>
        <h2>{getTranslate('directory_sync')}</h2>
      </SettingsHeader>
      <DirectorySyncTeamView />
    </div>
  );
};

export default function ComponentPreview() {
  const [state, setState] = useParentState({});

  // Mock the getTranslate function
  const mockGetTranslate = (key: string) => key;

  // Mock the SettingsHeader component
  const MockSettingsHeader = ({ children }: { children: React.ReactNode }) => (
    <div>
      <h1>Mock Settings Header</h1>
      {children}
    </div>
  );

  // Mock the DirectorySyncTeamView component
  const MockDirectorySyncTeamView = () => <div>Mock Directory Sync Team View</div>;

  return (
    <MockOrgBrandingProvider>
      <MockFeatureProvider>
        <MockTooltipProvider>
          <MockTRPCProvider>
            <QueryClientProvider client={queryClient}>
              <MockDsyncPage
                getTranslate={mockGetTranslate}
                SettingsHeader={MockSettingsHeader}
                DirectorySyncTeamView={MockDirectorySyncTeamView}
              />
            </QueryClientProvider>
          </MockTRPCProvider>
        </MockTooltipProvider>
      </MockFeatureProvider>
    </MockOrgBrandingProvider>
  );
}