import React from 'react';
import { useParentState } from '../useIframeState';
import { TeamEventTypeForm } from '../../../../packages/features/ee/teams/components/TeamEventTypeForm';

import { useForm } from 'react-hook-form';
import { SchedulingType } from '@calcom/prisma/enums';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    isTeamAdminOrOwner: {
      type: "boolean",
      value: true,
      label: "Is Team Admin or Owner",
    },
    teamSlug: {
      type: "string",
      value: "my-team",
      label: "Team Slug",
    },
    teamId: {
      type: "number",
      value: 1,
      label: "Team ID",
    },
    isPending: {
      type: "boolean",
      value: false,
      label: "Is Pending",
    },
    urlPrefix: {
      type: "string",
      value: "https://cal.com",
      label: "URL Prefix",
    },
    isManagedEventType: {
      type: "boolean",
      value: false,
      label: "Is Managed Event Type",
    },
  });

  const form = useForm({
    defaultValues: {
      title: "",
      slug: "",
      schedulingType: SchedulingType.COLLECTIVE,
      teamId: state.teamId.value,
    },
  });

  const handleSubmit = (values) => {
    console.log("Form submitted with values:", values);
  };

  const SubmitButton = (isPending) => (
    <button type="submit" disabled={isPending}>
      {isPending ? "Submitting..." : "Submit"}
    </button>
  );

  return (
    <TeamEventTypeForm
      isTeamAdminOrOwner={state.isTeamAdminOrOwner.value}
      teamSlug={state.teamSlug.value}
      teamId={state.teamId.value}
      isPending={state.isPending.value}
      urlPrefix={state.urlPrefix.value}
      form={form}
      handleSubmit={handleSubmit}
      isManagedEventType={state.isManagedEventType.value}
      SubmitButton={SubmitButton}
    />
  );
}