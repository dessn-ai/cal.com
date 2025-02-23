import React from 'react';
import { useParentState } from '../useIframeState';
import { KBarContent } from '../../../../packages/features/kbar/Kbar';

import { KBarProvider } from 'kbar';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    // No props identified for KBarContent, so we're not setting any state
  });

  return (
    <KBarProvider actions={[]}>
      <KBarContent />
    </KBarProvider>
  );
}