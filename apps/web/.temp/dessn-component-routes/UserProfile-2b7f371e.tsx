import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../components/getting-started/steps-views/UserProfile';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// Create a mock context
const TRPCContext = React.createContext(null);

export default function ComponentPreview() {
  const [queryClient] = React.useState(() => new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
        refetchOnWindowFocus: false,
      },
    },
  }));

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

  // Create mock TRPC hooks
  const mockTRPCHooks = {
    viewer: {
      me: {
        useSuspenseQuery: () => [JSON.parse(state.user.value)],
        useQuery: () => ({ data: JSON.parse(state.user.value) }),
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
          isLoading: false,
        }),
      },
    },
    useContext: () => mockTRPCHooks,
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
      <TRPCContext.Provider value={mockTRPCHooks}>
        <ImportedComponent />
      </TRPCContext.Provider>
    </QueryClientProvider>
  );
}

// Mock the trpc hooks
const proxy = new Proxy({}, {
  get: function(target, prop) {
    return function() {
      return mockTRPCHooks;
    };
  },
});

// Override the imported trpc object
import { trpc } from "@calcom/trpc/react";
Object.defineProperty(trpc, 'useContext', {
  value: () => mockTRPCHooks,
  writable: true,
});