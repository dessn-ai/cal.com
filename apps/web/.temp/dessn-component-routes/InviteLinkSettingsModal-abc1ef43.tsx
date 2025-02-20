import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/features/ee/teams/components/InviteLinkSettingsModal';

import { useForm } from 'react-hook-form';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    isOpen: {
      type: "boolean",
      value: true,
      label: "Is Open",
    },
    teamId: {
      type: "number",
      value: 1,
      label: "Team ID",
    },
    token: {
      type: "string",
      value: "sample-token-123",
      label: "Token",
    },
    expiresInDays: {
      type: "number",
      value: 7,
      label: "Expires In Days",
    },
  });

  const form = useForm();

  return (
    <ImportedComponent
      isOpen={state.isOpen.value}
      teamId={state.teamId.value}
      token={state.token.value}
      expiresInDays={state.expiresInDays.value}
      onExit={() => {
        setState('isOpen', false);
        console.log('Modal closed');
      }}
    />
  );
}