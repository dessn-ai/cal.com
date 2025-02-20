import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../app/(use-page-wrapper)/availability/troubleshoot/layout';

import { ErrorBoundary, Icon } from "@calcom/ui";

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    children: {
      type: "string",
      value: "Sample content",
      label: "Children",
    },
  });

  return (
    <ImportedComponent>
      <ErrorBoundary>
        <React.Suspense fallback={<Icon name="loader" />}>
          {state.children.value}
        </React.Suspense>
      </ErrorBoundary>
    </ImportedComponent>
  );
}