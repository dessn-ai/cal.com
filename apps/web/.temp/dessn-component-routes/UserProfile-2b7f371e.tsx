import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../components/getting-started/steps-views/UserProfile';

import { trpc } from "@calcom/trpc/react";
import { useForm } from "react-hook-form";

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

  const mockTrpc = {
    viewer: {
      me: {
        useSuspenseQuery: () => [JSON.parse(state.user.value)],
      },
      eventTypes: {
        list: {
          useQuery: () => ({ data: JSON.parse(state.eventTypes.value) }),
        },
      },
      updateProfile: {
        useMutation: () => ({
          mutate: () => {},
          isPending: false,
        }),
      },
      eventTypes: {
        create: {
          useMutation: () => ({
            mutate: () => {},
          }),
        },
      },
    },
    useUtils: () => ({
      viewer: {
        me: {
          refetch: async () => {},
        },
      },
    }),
  };

  return (
    <trpc.Provider client={mockTrpc as any}>
      <ImportedComponent />
    </trpc.Provider>
  );
}