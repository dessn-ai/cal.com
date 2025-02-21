import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/features/users/components/VerifyEmailBanner';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    data: {
      type: "boolean",
      value: true,
      label: "Show Banner",
    },
  });

  return (
    <div>
      <ImportedComponent data={state.data.value} />
    </div>
  );
}