import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../modules/apps/categories/categories-view';
import { DehydratedState } from '@tanstack/react-query';

// Mock OrgBrandingProvider context
const OrgBrandingContext = React.createContext({
  logo: '',
  name: '',
  brandColor: '',
  darkBrandColor: '',
  theme: null,
});

// Mock OrgBrandingProvider
const OrgBrandingProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const value = {
    logo: '',
    name: 'Organization',
    brandColor: '#292929',
    darkBrandColor: '#292929',
    theme: null,
  };
  return (
    <OrgBrandingContext.Provider value={value}>
      {children}
    </OrgBrandingContext.Provider>
  );
};

// Create a mock TroubleshooterStoreProvider
const TroubleshooterStoreProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <>{children}</>;
};

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    categories: {
      type: "string",
      value: JSON.stringify([
        { name: "Calendar", count: 5 },
        { name: "Communication", count: 3 },
        { name: "Productivity", count: 7 },
        { name: "Analytics", count: 2 },
        { name: "Integration", count: 4 }
      ]),
      label: "Categories",
    },
  });

  const parsedCategories = JSON.parse(state.categories.value);

  // Mock DehydratedState
  const mockTrpcState: DehydratedState = {
    mutations: [],
    queries: []
  };

  return (
    <OrgBrandingProvider>
      <TroubleshooterStoreProvider>
        <ImportedComponent
          categories={parsedCategories}
          trpcState={mockTrpcState}
        />
      </TroubleshooterStoreProvider>
    </OrgBrandingProvider>
  );
}