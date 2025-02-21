import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/features/users/components/VerifyEmailBanner';

import { FlagProvider } from '../../../../packages/features/flags/context/provider';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    data: {
      type: "boolean",
      value: true,
      label: "Show Banner",
    },
  });

  return (
    <FlagProvider>
      <ImportedComponent data={state.data.value} />
    </FlagProvider>
  );
}