import React from 'react';
import { useParentState } from '../useIframeState';
import { SlugReplacementEmail } from '../../../../packages/emails/src/templates/SlugReplacementEmail';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    slug: {
      type: "string",
      value: "my-event",
      label: "Slug",
    },
    name: {
      type: "string",
      value: "John Doe",
      label: "Name",
    },
    teamName: {
      type: "string",
      value: "My Team",
      label: "Team Name",
    },
  });

  const mockT = (key: string, options?: any) => {
    const translations: { [key: string]: string } = {
      "email_subject_slug_replacement": `Event type /${options?.slug} has been replaced`,
      "event_replaced_notice": "Event Type Replaced",
      "review_event_type": "Review Event Type",
      "email_body_slug_replacement_suggestion": "If you have any questions about the event type, please reach out to your administrator.\n\nHappy scheduling,\nThe Cal.com team",
    };
    return translations[key] || key;
  };

  return (
    <SlugReplacementEmail
      slug={state.slug.value}
      name={state.name.value}
      teamName={state.teamName.value}
      t={mockT}
    />
  );
}