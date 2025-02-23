import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/features/webhooks/pages/webhook-new-view';
import { SessionProvider } from "next-auth/react";
import { trpc } from "@calcom/trpc/react";

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    teamId: {
      type: "number",
      value: 1,
      label: "Team ID",
    },
    platform: {
      type: "boolean",
      value: false,
      label: "Platform",
    },
  });

  const mockSession = {
    status: "authenticated",
    data: {
      user: {
        id: "user123",
        email: "test@example.com",
        name: "Test User",
      },
    },
  };

  // Mock TRPC hooks with more complete data
  const mockIntegrations = {
    items: [
      { 
        slug: "app1",
        title: "App 1",
        description: "App 1 description",
        enabled: true,
      },
      {
        slug: "app2",
        title: "App 2",
        description: "App 2 description",
        enabled: true,
      }
    ],
  };

  // Mock TRPC queries and mutations
  trpc.viewer.integrations.useQuery = () => ({
    data: mockIntegrations,
    isLoading: false,
    error: null,
    isPending: false,
  });

  trpc.viewer.webhook.list.useQuery = () => ({
    data: [],
    isLoading: false,
    error: null,
  });

  trpc.viewer.webhook.create.useMutation = () => ({
    mutate: async (data) => {
      console.log('Creating webhook:', data);
      return Promise.resolve({ success: true });
    },
    isLoading: false,
    error: null,
  });

  try {
    return (
      <SessionProvider session={mockSession}>
        <div className="w-full">
          <ImportedComponent />
        </div>
      </SessionProvider>
    );
  } catch (error) {
    console.error('Error rendering NewWebhookView:', error);
    return <div>Error loading webhook view</div>;
  }
}