import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/features/settings/TimezoneChangeDialog';
import { SessionProvider } from 'next-auth/react';

// Create a minimal mock context if needed
const MockProviders = ({ children }) => {
  return (
    <SessionProvider session={{
      user: {
        id: "test-user",
        name: "Test User",
        email: "test@example.com",
        timeZone: "America/New_York",
      },
      expires: "2100-01-01",
    }}>
      {children}
    </SessionProvider>
  );
};

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    showDialog: {
      type: "boolean",
      value: true,
      label: "Show Dialog",
    },
  });

  return (
    <div className="w-full">
      <MockProviders>
        <React.Suspense fallback={<div>Loading...</div>}>
          {state.showDialog.value && (
            <ImportedComponent />
          )}
        </React.Suspense>
      </MockProviders>
    </div>
  );
}