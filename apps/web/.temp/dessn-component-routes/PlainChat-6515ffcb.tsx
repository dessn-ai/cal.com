import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../lib/plain/plainChat';
import { SessionProvider } from 'next-auth/react';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    isAppDomain: {
      type: "boolean",
      value: true,
      label: "Is App Domain",
    },
    userEmail: {
      type: "string",
      value: "user@example.com",
      label: "User Email",
    },
    shouldOpenPlain: {
      type: "boolean",
      value: false,
      label: "Should Open Plain",
    },
  });

  // Mock next/navigation hooks
  const usePathname = () => "/event-types";
  const useSearchParams = () => new URLSearchParams(state.shouldOpenPlain.value ? "?openPlain=true" : "");

  // Mock fetch function without using Jest
  global.fetch = async () => {
    return {
      ok: true,
      json: async () => ({
        hash: "mockhash",
        email: state.userEmail.value,
        appId: "mockappid",
        shortName: "User",
        fullName: "Test User",
        chatAvatarUrl: "https://example.com/avatar.jpg",
      })
    };
  };

  return (
    <SessionProvider session={{ user: { email: state.userEmail.value } }}>
      <ImportedComponent />
    </SessionProvider>
  );
}