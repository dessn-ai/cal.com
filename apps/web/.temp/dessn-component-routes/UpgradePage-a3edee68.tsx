import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../modules/upgrade/upgrade-view';

// Mock TRPCProvider component
const TRPCProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <>{children}</>;
};

// Mock I18nLanguageHandler component
const I18nLanguageHandler: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <>{children}</>;
};

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    doesUserHaveOrgToUpgrade: {
      type: 'boolean',
      value: true,
      label: 'User Has Org To Upgrade',
    },
  });

  // Create a mock context that the component might need
  const mockContext = {
    viewer: {
      organizations: {
        checkIfOrgNeedsUpgrade: {
          useQuery: () => ({
            data: state.doesUserHaveOrgToUpgrade.value,
            isLoading: false,
            error: null,
          }),
        },
        publish: {
          useMutation: () => ({
            mutate: async () => {},
            isLoading: false,
          }),
        },
      },
    },
  };

  // Wrap the component with necessary providers
  return (
    <div data-testid="upgrade-page-preview">
      <TRPCProvider>
        <I18nLanguageHandler>
          <ImportedComponent />
        </I18nLanguageHandler>
      </TRPCProvider>
    </div>
  );
}