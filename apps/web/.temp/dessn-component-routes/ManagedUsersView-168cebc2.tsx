import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../modules/settings/platform/managed-users/managed-users-view';

import { useLocale } from '@calcom/lib/hooks/useLocale';

export default function ComponentPreview() {
  const { t } = useLocale();

  const [state, setState] = useParentState({
    oAuthClients: {
      type: "dropdown",
      value: "client1",
      options: ["client1", "client2", "client3"],
      label: "OAuth Clients",
    },
    isLoading: {
      type: "boolean",
      value: false,
      label: "Is Loading",
    },
    error: {
      type: "boolean",
      value: false,
      label: "Has Error",
    },
  });

  const mockOAuthClients = [
    { id: "client1", name: "Client 1" },
    { id: "client2", name: "Client 2" },
    { id: "client3", name: "Client 3" },
  ];

  const mockUseOAuthClients = () => ({
    data: state.error.value ? [] : mockOAuthClients,
    error: state.error.value ? new Error("Failed to load OAuth clients") : null,
    isLoading: state.isLoading.value,
  });

  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <ImportedComponent />
    </React.Suspense>
  );
}