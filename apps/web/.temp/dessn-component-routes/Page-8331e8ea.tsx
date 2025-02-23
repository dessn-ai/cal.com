import React, { Suspense } from 'react';
import { useParentState } from '../useIframeState';

// Create mock components and context
const MockSettingsHeader = ({ children }: { children: React.ReactNode }) => <div>{children}</div>;

// Mock translation function
const mockT = (key: string) => key;

// Create a mock context provider that wraps all required providers
const MockProviders: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div>{children}</div>;
};

export default function ComponentPreview() {
  const [state, setState] = useParentState({});

  // Wrap the imported component in error boundary and suspense
  try {
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <MockProviders>
          <div className="w-full">
            <MockSettingsHeader>
              <h2>Appearance Settings</h2>
            </MockSettingsHeader>
            <div className="w-full mt-6 space-y-6">
              {/* Mock the main content */}
              <div>
                <h3>Theme Preferences</h3>
                <div className="mt-4">
                  <p>Appearance settings content</p>
                </div>
              </div>
            </div>
          </div>
        </MockProviders>
      </Suspense>
    );
  } catch (error) {
    console.error('Error rendering appearance settings:', error);
    return <div>Error loading appearance settings</div>;
  }
}