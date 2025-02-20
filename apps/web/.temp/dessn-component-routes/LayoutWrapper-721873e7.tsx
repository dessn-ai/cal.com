import React from 'react';
import { useParentState } from '../useIframeState';
import { LayoutWrapper } from '../../modules/settings/teams/new/create-new-team-view';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    children: {
      type: "string",
      value: "<CreateNewTeamPage />",
      label: "Children",
    },
  });

  return (
    <LayoutWrapper>
      {state.children.value}
    </LayoutWrapper>
  );
}