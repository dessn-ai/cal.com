import React from 'react';
import { useParentState } from '../useIframeState';
import { OrganizationAdminNoSlotsEmail } from '../../../../packages/emails/src/templates/OrganizationAdminNoSlots';

// Mock translation function that returns the key and interpolates values
const mockTranslation = (key: string, values?: Record<string, string>) => {
  if (!values) return key;
  let result = key;
  Object.entries(values).forEach(([k, v]) => {
    result = result.replace(`{{${k}}}`, v);
  });
  return result;
};

export default function ComponentPreview() {
  const [state, setState] = useParentState({
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

  try {
    return (
      <OrganizationAdminNoSlotsEmail
        language={mockTranslation}
        to={{ email: state.to.value }}
        user={state.user.value}
        slug={state.slug.value}
        startTime={state.startTime.value}
        endTime={state.endTime.value}
        editLink={state.editLink.value}
        teamSlug={state.teamSlug.value}
      />
    );
  } catch (error) {
    console.error('Error rendering OrganizationAdminNoSlotsEmail:', error);
    return <div>Error rendering email preview</div>;
  }
}