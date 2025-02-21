import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/features/webhooks/pages/webhooks-view';

import { SessionProvider } from 'next-auth/react';
import { TrpcProvider } from '@calcom/trpc/react';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    isAdmin: {
      type: "boolean",
      value: true,
      label: "Is Admin",
    },
  });

  const mockSession = {
    data: {
      user: {
        role: state.isAdmin.value ? 'ADMIN' : 'USER',
      },
    },
    status: "authenticated",
  };

  return (
    <SessionProvider session={mockSession as any}>
      <TrpcProvider>
        <ImportedComponent />
      </TrpcProvider>
    </SessionProvider>
  );
}