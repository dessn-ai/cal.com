import React from 'react';
import { useParentState } from '../useIframeState';

// Mock components and data
const MockAppearanceView = () => {
  return (
    <div className="appearance-view">
      <h1>Appearance Settings</h1>
      <div className="appearance-content">
        <div>Theme Settings Mock</div>
      </div>
    </div>
  );
};

// Create a mock settings layout
const MockSettingsLayout = ({ children }: { children: React.ReactNode }) => (
  <div className="settings-layout">
    {children}
  </div>
);

export default function ComponentPreview() {
  const [state, setState] = useParentState({});

  // Mock necessary globals and functions
  React.useEffect(() => {
    // Mock translation function
    (global as any).getTranslate = async () => (key: string) => key;
    
    // Mock components
    (global as any).SettingsHeader = ({ children }: { children: React.ReactNode }) => (
      <div className="settings-header">{children}</div>
    );
  }, []);

  return (
    <div className="preview-container">
      <MockSettingsLayout>
        <MockAppearanceView />
      </MockSettingsLayout>
    </div>
  );
}