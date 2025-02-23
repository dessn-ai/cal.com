import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../modules/settings/platform/oauth-clients/[clientId]/edit/edit-webhooks-view';

import { WebhookTriggerEvents } from '@calcom/prisma/enums';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    clientId: {
      type: "string",
      value: "example-client-id",
      label: "Client ID",
    },
    isPlatformUser: {
      type: "boolean",
      value: true,
      label: "Is Platform User",
    },
    isPaidUser: {
      type: "boolean",
      value: true,
      label: "Is Paid User",
    },
  });

  // Mock the necessary hooks and functions
  const mockUseParams = () => ({ clientId: state.clientId.value });
  const mockUseRouter = () => ({
    push: (path: string) => console.log(`Navigating to: ${path}`),
  });
  const mockUseLocale = () => ({ t: (key: string) => key });
  const mockUseGetUserAttributes = () => ({
    isUserLoading: false,
    isPlatformUser: state.isPlatformUser.value,
    isPaidUser: state.isPaidUser.value,
  });
  const mockUseOAuthClientWebhooks = () => ({
    data: [],
    status: "success",
    isFetched: true,
    refetch: () => Promise.resolve(),
  });
  const mockUseCreateOAuthClientWebhook = () => ({
    mutateAsync: () => Promise.resolve(),
  });
  const mockUseUpdateOAuthClientWebhook = () => ({
    mutateAsync: () => Promise.resolve(),
  });

  // Mock the necessary components
  const MockShell = ({ children }: { children: React.ReactNode }) => <div>{children}</div>;
  const MockWebhookForm = () => <div>Webhook Form</div>;

  // Mock the necessary functions
  const mockShowToast = (message: string, type: string) => console.log(`Toast: ${message} (${type})`);

  // Override the necessary imports
  (ImportedComponent as any).useParams = mockUseParams;
  (ImportedComponent as any).useRouter = mockUseRouter;
  (ImportedComponent as any).useLocale = mockUseLocale;
  (ImportedComponent as any).useGetUserAttributes = mockUseGetUserAttributes;
  (ImportedComponent as any).useOAuthClientWebhooks = mockUseOAuthClientWebhooks;
  (ImportedComponent as any).useCreateOAuthClientWebhook = mockUseCreateOAuthClientWebhook;
  (ImportedComponent as any).useUpdateOAuthClientWebhook = mockUseUpdateOAuthClientWebhook;
  (ImportedComponent as any).Shell = MockShell;
  (ImportedComponent as any).WebhookForm = MockWebhookForm;
  (ImportedComponent as any).showToast = mockShowToast;
  (ImportedComponent as any).WebhookTriggerEvents = WebhookTriggerEvents;

  return <ImportedComponent />;
}