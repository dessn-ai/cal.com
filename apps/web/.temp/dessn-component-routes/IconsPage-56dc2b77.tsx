import React, { Suspense } from 'react';
import { useParentState } from '../useIframeState';
import { IconSprites } from "@calcom/ui";

const ImportedComponent = React.lazy(() => import('../../app/icons/page').catch(() => ({
  default: () => <div>Failed to load Icons page</div>
})));

export default function ComponentPreview() {
  const [state, setState] = useParentState({});

  return (
    <div>
      <IconSprites />
      <Suspense fallback={<div>Loading...</div>}>
        <ImportedComponent />
      </Suspense>
    </div>
  );
}