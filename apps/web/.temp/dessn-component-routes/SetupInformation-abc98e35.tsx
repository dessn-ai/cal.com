import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../modules/apps/[slug]/setup/setup-view';

import { SessionProvider } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function ComponentPreview() {
  const [state, setState] = useParentState({});

  const mockSession = {
    data: null,
    status: 'authenticated',
  };

  const mockRouter = {
    replace: () => {},
  };

  return (
    <SessionProvider session={mockSession}>
      <ImportedComponent />
    </SessionProvider>
  );
}