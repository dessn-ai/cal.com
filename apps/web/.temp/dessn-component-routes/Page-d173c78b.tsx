import React from 'react';
import { useParentState } from '../useIframeState';

// Create mock providers
const MockOrgBrandingProvider = ({ children }: { children: React.ReactNode }) => <>{children}</>;
const MockFeatureProvider = ({ children }: { children: React.ReactNode }) => <>{children}</>;
const MockTooltipProvider = ({ children }: { children: React.ReactNode }) => <>{children}</>;
const MockQueryClientProvider = ({ children }: { children: React.ReactNode }) => <>{children}</>;
const MockTRPCProvider = ({ children }: { children: React.ReactNode }) => <>{children}</>;
const MockI18nextProvider = ({ children }: { children: React.ReactNode }) => <>{children}</>;
const MockSessionProvider = ({ children }: { children: React.ReactNode }) => <>{children}</>;

// Mock Component in case the real one fails to load
const MockOrganizationPage = () => {
  return (
    <div className="mock-organization-page">
      <h1>Organization Settings</h1>
      <div>Organization settings page content</div>
    </div>
  );
};

// Use the mock component as a fallback
const ImportedComponent = MockOrganizationPage;

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    // Since the component doesn't have any props, we don't need to define any state
  });

  // Mock the necessary functions and components
  React.useEffect(() => {
    const mockGetTranslate = async () => (key: string) => key;
    const mockSettingsHeader = ({ children }: { children: React.ReactNode }) => <div>{children}</div>;
    const mockLegacyPage = () => <div>Legacy Page Content</div>;

    // Mock the imports
    Object.assign(global, {
      getTranslate: mockGetTranslate,
      SettingsHeader: mockSettingsHeader,
      LegacyPage: mockLegacyPage,
    });
  }, []);

  return (
    <MockSessionProvider>
      <MockI18nextProvider>
        <MockTRPCProvider>
          <MockQueryClientProvider>
            <MockTooltipProvider>
              <MockFeatureProvider>
                <MockOrgBrandingProvider>
                  <ImportedComponent />
                </MockOrgBrandingProvider>
              </MockFeatureProvider>
            </MockTooltipProvider>
          </MockQueryClientProvider>
        </MockTRPCProvider>
      </MockI18nextProvider>
    </MockSessionProvider>
  );
}