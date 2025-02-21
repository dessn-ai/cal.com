import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/features/ee/support/lib/freshchat/FreshChatScript';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    host: {
      type: "string",
      value: "https://example.freshchat.com",
      label: "Freshchat Host",
    },
    token: {
      type: "string",
      value: "sample-token-123456",
      label: "Freshchat Token",
    },
  });

  // Mock the trpc.viewer.me.useQuery hook
  const mockUseQuery = () => ({
    data: {
      id: "user123",
      name: "John Doe",
      email: "john@example.com",
      username: "johndoe",
    },
  });

  // Mock the trpc object
  const mockTrpc = {
    viewer: {
      me: {
        useQuery: mockUseQuery,
      },
    },
  };

  // Mock the global window object
  if (typeof window !== 'undefined') {
    window.fcWidget = {
      init: () => console.log("FreshChat widget initialized"),
    };
  }

  // Mock the process.env
  process.env.NEXT_PUBLIC_FRESHCHAT_HOST = state.host.value;
  process.env.NEXT_PUBLIC_FRESHCHAT_TOKEN = state.token.value;

  return (
    <div>
      <ImportedComponent />
    </div>
  );
}