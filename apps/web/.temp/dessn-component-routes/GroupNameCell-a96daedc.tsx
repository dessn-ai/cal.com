import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/features/ee/dsync/components/GroupNameCell';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    groupNames: {
      type: "string",
      value: "Group A,Group B,Group C",
      label: "Group Names (comma-separated)",
    },
    teamId: {
      type: "number",
      value: 1,
      label: "Team ID",
    },
    directoryId: {
      type: "string",
      value: "dir-123",
      label: "Directory ID",
    },
  });

  const groupNamesArray = state.groupNames.value.split(',').map(name => name.trim());

  return (
    <ImportedComponent
      groupNames={groupNamesArray}
      teamId={state.teamId.value}
      directoryId={state.directoryId.value}
    />
  );
}