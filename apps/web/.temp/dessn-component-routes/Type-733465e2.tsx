import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../modules/org/[orgSlug]/instant-meeting/team/[slug]/[type]/instant-meeting-view';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    slug: {
      type: "string",
      value: "team-meeting",
      label: "Slug"
    },
    user: {
      type: "string",
      value: "johndoe",
      label: "User"
    },
    booking: {
      type: "string",
      value: JSON.stringify({}),
      label: "Booking Data"
    },
    isEmbed: {
      type: "boolean",
      value: false,
      label: "Is Embed"
    },
    isBrandingHidden: {
      type: "boolean",
      value: false,
      label: "Is Branding Hidden"
    },
    entity: {
      type: "string",
      value: JSON.stringify({}),
      label: "Entity"
    },
    eventTypeId: {
      type: "number",
      value: 1,
      label: "Event Type ID"
    },
    duration: {
      type: "number",
      value: 30,
      label: "Duration"
    }
  });

  return (
    <ImportedComponent
      slug={state.slug.value}
      user={state.user.value}
      booking={JSON.parse(state.booking.value)}
      isEmbed={state.isEmbed.value}
      isBrandingHidden={state.isBrandingHidden.value}
      entity={JSON.parse(state.entity.value)}
      eventTypeId={state.eventTypeId.value}
      duration={state.duration.value}
    />
  );
}