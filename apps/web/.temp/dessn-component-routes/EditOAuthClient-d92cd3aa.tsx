import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../modules/settings/platform/oauth-clients/[clientId]/edit/edit-view';

import { useForm } from 'react-hook-form';

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

  const mockUseParams = () => ({
    clientId: state.clientId.value,
  });

  const mockUseRouter = () => ({
    push: () => {},
  });

  const mockUseLocale = () => ({
    t: (key: string) => key,
  });

  const mockUseGetUserAttributes = () => ({
    isUserLoading: false,
    isPlatformUser: state.isPlatformUser.value,
    isPaidUser: state.isPaidUser.value,
  });

  const mockUseOAuthClient = () => ({
    data: {
      name: "Example OAuth Client",
      areEmailsEnabled: true,
      redirectUris: [{ uri: "https://example.com/callback" }],
      bookingRedirectUri: "https://example.com/booking",
      bookingCancelRedirectUri: "https://example.com/cancel",
      bookingRescheduleRedirectUri: "https://example.com/reschedule",
      permissions: 0,
    },
    isFetched: true,
    isFetching: false,
    isError: false,
    refetch: () => {},
  });

  const mockUseUpdateOAuthClient = () => ({
    mutateAsync: () => Promise.resolve(),
    isPending: false,
  });

  React.useEffect(() => {
    (global as any).useParams = mockUseParams;
    (global as any).useRouter = mockUseRouter;
    (global as any).useLocale = mockUseLocale;
    (global as any).useGetUserAttributes = mockUseGetUserAttributes;
    (global as any).useOAuthClient = mockUseOAuthClient;
    (global as any).useUpdateOAuthClient = mockUseUpdateOAuthClient;
    (global as any).useForm = useForm;
  }, []);

  return <ImportedComponent />;
}