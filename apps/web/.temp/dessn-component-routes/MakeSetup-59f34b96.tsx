import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/app-store/make/pages/setup/index';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    inviteLink: {
      type: "string",
      value: "https://www.make.com/en/invite/123456",
      label: "Invite Link",
    },
  });

  return (
    <ImportedComponent
      inviteLink={state.inviteLink.value}
    />
  );
}