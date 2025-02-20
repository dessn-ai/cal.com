import React from 'react';
import { useParentState } from '../useIframeState';
import { SetupAvailability } from '../../components/getting-started/steps-views/SetupAvailability';
import { useForm } from 'react-hook-form';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { httpBatchLink } from '@trpc/client';
import { createTRPCReact } from '@trpc/react-query';

// Create a mock TRPC provider since we don't have access to the real one
const api = createTRPCReact();
const queryClient = new QueryClient();
const trpcClient = api.createClient({
  links: [
    httpBatchLink({
      url: '/api/trpc',
    }),
  ],
});

const MockTRPCProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <api.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
    </api.Provider>
  );
};

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    defaultScheduleId: {
      type: "number",
      value: 1,
      label: "Default Schedule ID",
    },
  });

  const form = useForm();

  return (
    <MockTRPCProvider>
      <SetupAvailability
        nextStep={() => console.log('Next step called')}
        defaultScheduleId={state.defaultScheduleId.value}
      />
    </MockTRPCProvider>
  );
}