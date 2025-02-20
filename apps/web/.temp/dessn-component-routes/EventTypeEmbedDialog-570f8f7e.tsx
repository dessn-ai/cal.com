import React from 'react';
import { useParentState } from '../useIframeState';
import { EventTypeEmbedDialog } from '../../../../packages/features/embed/EventTypeEmbed';

import { TRPCProvider } from '@calcom/trpc/react';

export default function ComponentPreview() {
  const [state, setState] = useParentState({});

  return (
    <TRPCProvider>
      <EventTypeEmbedDialog />
    </TRPCProvider>
  );
}