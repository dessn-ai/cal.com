import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/features/ee/teams/components/InternalNotePresetsView';

import { useForm } from 'react-hook-form';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    team: {
      type: "string",
      value: JSON.stringify({
        id: 1,
        name: "Sample Team",
        membership: {
          role: "ADMIN"
        }
      }),
      label: "Team Data"
    }
  });

  const form = useForm();

  const team = JSON.parse(state.team.value);

  return (
    <ImportedComponent
      team={team}
    />
  );
}