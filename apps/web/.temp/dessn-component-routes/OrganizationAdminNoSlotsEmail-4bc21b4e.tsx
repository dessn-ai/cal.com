import React from 'react';
import { useParentState } from '../useIframeState';
import { OrganizationAdminNoSlotsEmail } from '../../../../packages/emails/src/templates/OrganizationAdminNoSlots';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    language: {
      type: "string",
      value: "en",
      label: "Language",
    },
    to: {
      type: "string",
      value: "admin@example.com",
      label: "To Email",
    },
    user: {
      type: "string",
      value: "John Doe",
      label: "User",
    },
    slug: {
      type: "string",
      value: "meeting",
      label: "Slug",
    },
    startTime: {
      type: "string",
      value: "2023-06-01T09:00:00Z",
      label: "Start Time",
    },
    endTime: {
      type: "string",
      value: "2023-06-01T17:00:00Z",
      label: "End Time",
    },
    editLink: {
      type: "string",
      value: "https://example.com/edit",
      label: "Edit Link",
    },
    teamSlug: {
      type: "string",
      value: "team-a",
      label: "Team Slug",
    },
  });

  // Create a simple translation function that returns the key
  const t = (key: string) => key;

  return (
    <OrganizationAdminNoSlotsEmail
      language={t}
      to={{ email: state.to.value }}
      user={state.user.value}
      slug={state.slug.value}
      startTime={state.startTime.value}
      endTime={state.endTime.value}
      editLink={state.editLink.value}
      teamSlug={state.teamSlug.value}
    />
  );
}