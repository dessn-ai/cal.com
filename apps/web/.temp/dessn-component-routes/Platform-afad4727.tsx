import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../modules/settings/platform/platform-view';

import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    isPlatformUser: {
      type: "boolean",
      value: true,
      label: "Is Platform User"
    },
    isPaidUser: {
      type: "boolean",
      value: true,
      label: "Is Paid User"
    },
    isUserLoading: {
      type: "boolean",
      value: false,
      label: "Is User Loading"
    },
    isOAuthClientLoading: {
      type: "boolean",
      value: false,
      label: "Is OAuth Client Loading"
    },
    isUserBillingDataLoading: {
      type: "boolean",
      value: false,
      label: "Is User Billing Data Loading"
    }
  });

  // Mock the hooks and context providers
  const mockUseLocale = () => ({
    t: (key: string) => key,
  });

  const mockUseOAuthClients = () => ({
    data: [],
    isLoading: state.isOAuthClientLoading.value,
    refetch: () => {},
  });

  const mockUseDeleteOAuthClient = () => ({
    mutateAsync: async () => {},
    isPending: false,
  });

  const mockUseGetUserAttributes = () => ({
    isUserLoading: state.isUserLoading.value,
    isUserBillingDataLoading: state.isUserBillingDataLoading.value,
    isPlatformUser: state.isPlatformUser.value,
    isPaidUser: state.isPaidUser.value,
    userBillingData: {},
    userOrgId: "mock-org-id",
  });

  // Mock the context
  React.useEffect(() => {
    (window as any).useLocale = mockUseLocale;
    (window as any).useOAuthClients = mockUseOAuthClients;
    (window as any).useDeleteOAuthClient = mockUseDeleteOAuthClient;
    (window as any).useGetUserAttributes = mockUseGetUserAttributes;
  }, [state]);

  return (
    <QueryClientProvider client={queryClient}>
      <ImportedComponent />
    </QueryClientProvider>
  );
}