import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/features/users/components/VerifyEmailBanner';

import { FeatureProvider } from '../../../../packages/features/flags/context/provider';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    data: {
      type: "boolean",
      value: true,
      label: "Show Banner",
    },
  });

  // Provide an empty flags object as value
  return (
    <FeatureProvider value={{}}>
      <ImportedComponent data={state.data.value} />
    </FeatureProvider>
  );
}