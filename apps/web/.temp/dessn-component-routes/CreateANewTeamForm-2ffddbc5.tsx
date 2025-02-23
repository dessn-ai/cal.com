import React from 'react';
import { useParentState } from '../useIframeState';
import { CreateANewTeamForm } from '../../../../packages/features/ee/teams/components/CreateANewTeamForm';

import { useForm } from 'react-hook-form';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    submitLabel: {
      type: "string",
      value: "Create Team",
      label: "Submit Label",
    },
    inDialog: {
      type: "boolean",
      value: false,
      label: "In Dialog",
    },
    slug: {
      type: "string",
      value: "my-team",
      label: "Slug",
    },
  });

  const onCancel = () => {
    console.log("Cancelled");
  };

  const onSuccess = (data: any) => {
    console.log("Success:", data);
  };

  return (
    <CreateANewTeamForm
      onCancel={onCancel}
      submitLabel={state.submitLabel.value}
      onSuccess={onSuccess}
      inDialog={state.inDialog.value}
      slug={state.slug.value}
    />
  );
}