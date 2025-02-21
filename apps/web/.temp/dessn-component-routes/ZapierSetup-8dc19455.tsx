import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/app-store/zapier/pages/setup/index';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    inviteLink: {
      type: "string",
      value: "https://zapier.com/apps/cal.com/integrations",
      label: "Invite Link",
    },
  });

  return <ImportedComponent inviteLink={state.inviteLink.value} />;
}