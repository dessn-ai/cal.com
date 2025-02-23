import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../components/getting-started/steps-views/UserProfile';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { FormProvider, useForm } from "react-hook-form";

// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
});

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    user: {
      type: "string",
      value: JSON.stringify({
        id: 1,
        name: "John Doe",
        email: "john@example.com",
        avatar: "https://example.com/avatar.jpg",
        bio: "I'm a software developer",
      }),
      label: "User Data",
    },
    eventTypes: {
      type: "string",
      value: JSON.stringify([
        { id: 1, title: "15min Meeting", slug: "15min", length: 15 },
        { id: 2, title: "30min Meeting", slug: "30min", length: 30 },
      ]),
      label: "Event Types",
    },
  });

  const methods = useForm();

  // Create mock trpc context
  const mockTrpcContext = {
    viewer: {
      me: {
        useSuspenseQuery: () => [JSON.parse(state.user.value)],
      },
      eventTypes: {
        list: {
          useQuery: () => ({ data: JSON.parse(state.eventTypes.value) }),
        },
        create: {
          useMutation: () => ({
            mutate: async () => {},
            isLoading: false,
          }),
        },
      },
      updateProfile: {
        useMutation: () => ({
          mutate: async () => {},
          isPending: false,
        }),
      },
    },
    useContext: () => mockTrpcContext,
    useUtils: () => ({
      viewer: {
        me: {
          refetch: async () => {},
        },
      },
    }),
  };

  return (
    <QueryClientProvider client={queryClient}>
      <FormProvider {...methods}>
        <div className="w-full">
          <ImportedComponent />
        </div>
      </FormProvider>
    </QueryClientProvider>
  );
}