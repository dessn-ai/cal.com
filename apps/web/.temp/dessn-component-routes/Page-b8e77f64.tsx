import React, { Suspense } from 'react';
import { useParentState } from '../useIframeState';

// Mock the required components and functions
const mockComponents = {
  SettingsHeader: ({ title, description, children }: { title: string; description: string; children: React.ReactNode }) => (
    <div className="settings-header">
      <h1>{title}</h1>
      <p>{description}</p>
      {children}
    </div>
  ),
  
  FlagListingView: () => (
    <div className="flag-listing-view">Mock Flag Listing View</div>
  ),
};

// Mock the translation function
const getTranslate = () => {
  return (key: string) => key;
};

// Mock the metadata generator
const _generateMetadata = async (titleFn: (t: any) => string, descriptionFn: (t: any) => string) => {
  return {
    title: titleFn((key: string) => key),
    description: descriptionFn((key: string) => key),
  };
};

// Override the imports that the component will use
const mockImports = {
  '@calcom/features/flags/pages/flag-listing-view': {
    FlagListingView: mockComponents.FlagListingView,
  },
  '@calcom/features/settings/appDir/SettingsHeader': mockComponents.SettingsHeader,
  'app/_utils': {
    getTranslate,
    _generateMetadata,
  },
};

// Add mocks to global scope
if (typeof window !== 'undefined') {
  (window as any).__mocks__ = mockImports;
  (window as any).getTranslate = getTranslate;
  (window as any)._generateMetadata = _generateMetadata;
}

// Create the preview component
export default function ComponentPreview() {
  const [state, setState] = useParentState({});

  return (
    <div className="preview-wrapper">
      <mockComponents.SettingsHeader 
        title="Feature Flags" 
        description="Admin Flags Description"
      >
        <mockComponents.FlagListingView />
      </mockComponents.SettingsHeader>
    </div>
  );
}