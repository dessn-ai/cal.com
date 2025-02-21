import React from 'react';
import { useParentState } from '../useIframeState';
import { TopNavContainer } from '../../../../packages/features/shell/TopNav';

import { SessionProvider } from 'next-auth/react';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    // No props identified for TopNavContainer, so we don't need to define any state
  });

  return (
    <SessionProvider session={{ status: 'authenticated' } as any}>
      <TopNavContainer />
    </SessionProvider>
  );
}