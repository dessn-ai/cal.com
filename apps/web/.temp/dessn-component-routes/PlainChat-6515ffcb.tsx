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

  // Create a mock session
  const mockSession = {
    user: { 
      email: state.userEmail.value,
      name: "Test User",
    },
    expires: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString()
  };

  return (
    <SessionProvider session={mockSession}>
      <ImportedComponent />
    </SessionProvider>
  );
}