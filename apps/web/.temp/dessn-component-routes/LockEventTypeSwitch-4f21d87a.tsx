import React from 'react';
import { useParentState } from '../useIframeState';
import { LockEventTypeSwitch } from '../../../../packages/features/ee/organizations/pages/components/LockEventTypeSwitch';
import { useForm, FormProvider } from 'react-hook-form';
import { trpc } from '@calcom/trpc/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { httpBatchLink } from '@trpc/client';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    isAdminOrOwner: {
      type: "boolean",
      value: true,
      label: "Is Admin or Owner",
    },
  });

  const currentOrg = {
    organizationSettings: {
      lockEventTypeCreationForUsers: false,
    },
  };

  const formMethods = useForm();

  // Create a new QueryClient instance
  const queryClient = new QueryClient();

  // Create a new trpc client
  const trpcClient = trpc.createClient({
    links: [
      httpBatchLink({
        url: '/api/trpc',
      }),
    ],
  });

  return (
    <QueryClientProvider client={queryClient}>
      <trpc.Provider client={trpcClient} queryClient={queryClient}>
        <FormProvider {...formMethods}>
          <LockEventTypeSwitch
            currentOrg={currentOrg}
            isAdminOrOwner={state.isAdminOrOwner.value}
          />
        </FormProvider>
      </trpc.Provider>
    </QueryClientProvider>
  );
}