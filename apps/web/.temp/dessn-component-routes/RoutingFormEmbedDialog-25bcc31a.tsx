import React from 'react';
import { useParentState } from '../useIframeState';
import { RoutingFormEmbedDialog } from '../../../../packages/features/embed/RoutingFormEmbed';

import { TRPCProvider } from '@calcom/trpc/react';

export default function ComponentPreview() {
  const [state, setState] = useParentState({});

  return (
    <TRPCProvider>
      <RoutingFormEmbedDialog />
    </TRPCProvider>
  );
}