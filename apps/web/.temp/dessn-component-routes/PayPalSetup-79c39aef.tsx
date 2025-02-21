import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/app-store/paypal/pages/setup/index';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    showContent: {
      type: "boolean",
      value: true,
      label: "Show Content",
    },
    newClientId: {
      type: "string",
      value: "",
      label: "New Client ID",
    },
    newSecretKey: {
      type: "string",
      value: "",
      label: "New Secret Key",
    },
  });

  // Mock the necessary hooks and functions
  const mockRouter = {
    push: () => {},
  };

  const mockUseLocale = () => ({
    t: (key: string) => key,
  });

  const mockTrpc = {
    viewer: {
      integrations: {
        useQuery: () => ({
          data: {
            items: [{ userCredentialIds: [1] }],
          },
          isSuccess: true,
          isPending: false,
        }),
      },
      appsRouter: {
        updateAppCredentials: {
          useMutation: () => ({
            mutate: () => {},
          }),
        },
      },
    },
  };

  // Mock the context providers
  const MockProviders: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return <>{children}</>;
  };

  return (
    <MockProviders>
      <ImportedComponent />
    </MockProviders>
  );
}