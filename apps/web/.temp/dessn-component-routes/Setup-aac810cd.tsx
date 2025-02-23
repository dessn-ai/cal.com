import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../modules/auth/setup-view';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    trpcState: {
      type: "string",
      value: JSON.stringify({}),
      label: "TRPC State",
    },
    isFreeLicense: {
      type: "boolean",
      value: true,
      label: "Is Free License",
    },
    userCount: {
      type: "number",
      value: 0,
      label: "User Count",
    },
  });

  return (
    <ImportedComponent
      trpcState={JSON.parse(state.trpcState.value)}
      isFreeLicense={state.isFreeLicense.value}
      userCount={state.userCount.value}
    />
  );
}