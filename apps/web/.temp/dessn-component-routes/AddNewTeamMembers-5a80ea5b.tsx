import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/features/ee/teams/components/AddNewTeamMembers';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    isOrg: {
      type: "boolean",
      value: false,
      label: "Is Organization",
    },
  });

  return <ImportedComponent isOrg={state.isOrg.value} />;
}