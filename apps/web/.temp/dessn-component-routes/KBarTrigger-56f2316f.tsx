import React from 'react';
import { useParentState } from '../useIframeState';
import { KBarTrigger } from '../../../../packages/features/kbar/Kbar';

import { KBarProvider } from 'kbar';

export default function ComponentPreview() {
  const [state, setState] = useParentState({});

  return (
    <KBarProvider actions={[]}>
      <KBarTrigger />
    </KBarProvider>
  );
}